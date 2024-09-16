import { IFilter } from '../../types';

interface IProps {
  filter: IFilter;
  setFilter: (filter: IFilter) => void;
}

const UserListHead: React.FC<IProps> = ({ filter, setFilter }) => {
  const changeFilter = (field: string) => {
    const result = { ...filter };
    if (field === filter.field) {
      if (result.method === 'ASC') {
        result.method = 'DESC';
      } else if (result.method === 'DESC') {
        result.method = '';
      } else {
        result.method = 'ASC';
      }
    } else {
      result.field = field;
      result.method = 'ASC';
    }
    setFilter(result);
  };

  const iconClasses = (field: string): string => {
    const classes: string[] = ['icon'];
    if (field === filter.field) {
      if (filter.method === 'ASC') {
        classes.push('icon-asc');
      } else if (filter.method === 'DESC') {
        classes.push('icon-desc');
      }
    }
    return classes.join(' ');
  };

  return (
    <div className="table-header">
      <div className="name" onClick={() => changeFilter('name')}>
        <span>name</span>
        <div className={iconClasses('name')}>
          <img src={'/arrow.svg'} alt="" />
        </div>
      </div>
      <div className="surname" onClick={() => changeFilter('surname')}>
        <span>surname</span>
        <div className={iconClasses('surname')}>
          <img src={'/arrow.svg'} alt="" />
        </div>
      </div>
      <div className="age" onClick={() => changeFilter('age')}>
        <span>age</span>
        <div className={iconClasses('age')}>
          <img src={'/arrow.svg'} alt="" />
        </div>
      </div>
      <div className="actions">actions</div>
    </div>
  );
};

export { UserListHead };
