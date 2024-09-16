import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { IFilter, IUser } from './types';
import { userStore } from './stores/UserStore';
import { useSortedUsers } from './hooks/useSortedUsers';
import { useByPageUsers } from './hooks/useByPageUsers';
import { AppButton } from './components/UI/button/AppButton';
import { UserList } from './components/user/UserList';
import { AppPagination } from './components/UI/pagination/AppPagination';
import { AppModal } from './components/UI/modal/AppModal';
import { UserCreateForm } from './components/user/UserCreateForm';

const App: React.FC = observer(() => {
  const [modal, setModal] = useState<boolean>(false);
  const [filter, setFilter] = useState<IFilter>({ field: '', method: '' });
  const [page, setPage] = useState<number>(1);
  const pageLimit: number = 5;

  const { users } = userStore;
  const sortedUsers = useSortedUsers(users, filter);

  const { totalPage, items, currentPage } = useByPageUsers(
    sortedUsers,
    page,
    pageLimit
  );

  useEffect(() => {
    if (page !== currentPage && currentPage > 0) {
      setPage(currentPage);
    }
  }, [page, currentPage]);

  useEffect(() => {
    userStore.loadData();
  }, []);

  const createUser = (user: IUser): void => {
    userStore.addUser(user);
    setModal(false);
  };

  return (
    <div>
      <div className="container">
        <div>
          <AppButton onClick={() => setModal(true)}>Add</AppButton>
        </div>
        <div className="user-list">
          <UserList
            title="User list"
            users={items}
            update={(user) => userStore.updateUser(user)}
            remove={(user) => userStore.deleteUser(user)}
            filter={filter}
            setFilter={(filter) => setFilter(filter)}
          ></UserList>
        </div>
        {totalPage > 1 && (
          <div className="pagination-content">
            <AppPagination
              totalPage={totalPage}
              page={page}
              changePage={(page) => setPage(page)}
            ></AppPagination>
          </div>
        )}
        <AppModal
          visible={modal}
          setVisible={(value: boolean) => setModal(value)}
        >
          <UserCreateForm title="Create User" newUser={createUser} />
        </AppModal>
      </div>
    </div>
  );
});

export { App };
