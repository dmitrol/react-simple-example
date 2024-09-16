import { useMemo } from 'react';
import { IUser } from '../types';
import _ from 'lodash';

interface IResult {
  currentPage: number;
  totalPage: number;
  items: IUser[];
}

export function useByPageUsers(
  users: IUser[],
  page: number,
  pageLimit: number
) {
  const memoResult = useMemo(() => {
    const result: IResult = {
      currentPage: page,
      totalPage: 0,
      items: [],
    };

    const allItems: IUser[][] = _.chunk(users, pageLimit);

    result.totalPage = _.size(allItems);

    if (result.totalPage < page) {
      result.currentPage = result.totalPage;
    }
    if (result.totalPage > 0) {
      if (page > 1) {
        result.items = allItems[result.currentPage - 1];
      } else {
        result.items = allItems[0];
      }
    }

    return result;
  }, [users, page, pageLimit]);
  return memoResult;
}
