import { useMemo } from 'react';
import { IFilter, IUser } from '../types';

export function useSortedUsers(users: IUser[], filter: IFilter) {
  const sortedUsers = useMemo(() => {  
    if (filter.field !== '' && filter.method !== '') {
      const result = [...users].sort((a, b) => {
        if (filter.field === 'name') {
          if (filter.method === 'DESC') {
            return b.name.localeCompare(a.name);
          }
          return a.name.localeCompare(b.name);
        }
        if (filter.field === 'surname') {
          if (filter.method === 'DESC') {
            return b.username.localeCompare(a.username);
          }
          return a.username.localeCompare(b.username);
        }
        if (filter.method === 'DESC') {
          return b.age - a.age;
        }
        return a.age - b.age;
      });

      return result;
    }
    return users;
  }, [users, filter.field, filter.method]);
  return sortedUsers;
}
