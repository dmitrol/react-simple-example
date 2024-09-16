import { IFilter, IUser } from '../../types';
import { UserItem } from './UserItem';
import { UserListHead } from './UserListHead';

interface IProps {
  title: string;
  users: IUser[];
  update: (user: IUser) => void;
  remove: (user: IUser) => void;
  filter: IFilter;
  setFilter: (filter: IFilter) => void;
}

const UserList: React.FC<IProps> = ({
  title,
  users,
  update,
  remove,
  filter,
  setFilter,
}) => {
  return (
    <div>
      {users.length ? (
        <div>
          <div className="table-title">{title}</div>
          <div className="table">
            <UserListHead filter={filter} setFilter={setFilter} />
            {users.map((item) => (
              <UserItem
                key={item.id}
                user={item}
                update={update}
                remove={remove}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>Empty list</div>
      )}
    </div>
  );
};

export { UserList };
