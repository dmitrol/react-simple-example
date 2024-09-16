import { useEffect, useState } from 'react';
import { IUser } from '../../types';
import { AppInput } from '../UI/input/AppInput';
import { AppButton } from '../UI/button/AppButton';

interface IProps {
  title: string;
  user?: IUser;
  newUser: (user: IUser) => void;
}

interface IFields {
  name: string;
  surname: string;
  age: number;
}

const UserCreateForm: React.FC<IProps> = ({ title, user, newUser }) => {
  const [fields, setFields] = useState<IFields>({
    name: '',
    surname: '',
    age: 18,
  });

  useEffect(() => {
    setFields({
      name: user?.name || '',
      surname: user?.username || '',
      age: user?.age || 18,
    });
  }, [user?.id, user?.name, user?.username, user?.age]);

  const validateForm = () => {
    return fields.name !== '' && fields.surname !== '';
  };

  const createUser = () => {
    if (validateForm()) {
      const candidate: IUser = {
        id: user?.id || Date.now(),
        name: fields.name,
        username: fields.surname,
        age: fields.age,
      };
      newUser(candidate);
      setFields({
        name: '',
        surname: '',
        age: 18,
      });
    }
  };
  return (
    <div className="create-form">
      <div className="title">{title}</div>
      <div className="row">
        <AppInput
          type="text"
          value={fields.name}
          onChange={(e) => setFields({ ...fields, name: e.target.value })}
        ></AppInput>
      </div>
      <div className="row">
        <AppInput
          type="text"
          value={fields.surname}
          onChange={(e) => setFields({ ...fields, surname: e.target.value })}
        ></AppInput>
      </div>
      <div className="row">
        <AppInput
          type="number"
          value={fields.age}
          onChange={(e) => setFields({ ...fields, age: +e.target.value })}
        ></AppInput>
      </div>
      <div className="submit">
        <AppButton onClick={createUser}>OK</AppButton>
      </div>
    </div>
  );
};

export { UserCreateForm };
