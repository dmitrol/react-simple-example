import { getPageArray } from '../../../helpers/pages';

interface IProps {
  page: number;
  totalPage: number;
  changePage: (page: number) => void;
}

const AppPagination: React.FC<IProps> = ({ page, totalPage, changePage }) => {
  const items = getPageArray(totalPage);

  return (
    <div className="pagination-wrapper">
      {items.map((item) => (
        <span
          key={item}
          className={
            item === page ? 'pagination-item active' : 'pagination-item'
          }
          onClick={() => changePage(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export { AppPagination };
