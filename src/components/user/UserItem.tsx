import { useState } from 'react';
import { IUser } from '../../types';
import { AppButton } from '../UI/button/AppButton';
import { AppModal } from '../UI/modal/AppModal';
import { UserCreateForm } from './UserCreateForm';


interface IProps {
  user: IUser;
  update: (user: IUser) => void;
  remove: (user: IUser) => void;
}

const UserItem: React.FC<IProps> = ({ user, update, remove }) => {
  const [modal, setModal] = useState<boolean>(false);

  const updateUser = (User: IUser): void => {
    update(User);
    setModal(false);
  };

  return (
    <>
      <AppModal visible={modal} setVisible={setModal}>
        <UserCreateForm
          title="Update User"
          newUser={updateUser}
          user={user}
        ></UserCreateForm>
      </AppModal>
      <div className="table-row">
        <div className="name">{user.name}</div>
        <div className="surname">{user.username}</div>
        <div className="age">{user.age}</div>
        <div className="actions">
          <AppButton onClick={() => setModal(true)}>Edit</AppButton>
          <AppButton onClick={() => remove(user)}>Delete</AppButton>
        </div>
      </div>
    </>
  );
};

export { UserItem };
