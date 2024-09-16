import { makeAutoObservable } from 'mobx';
import { IUser } from '../types';
import getUsers from '../helpers/users';

class UserStore {
  users: IUser[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  loadData() {
    const res = localStorage.getItem('users');
    if (res) {
      this.users = JSON.parse(res);
    } else {
      this.users = getUsers;
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  addUser(user: IUser) {
    this.users = [...this.users, user];
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  updateUser(user: IUser) {
    const result = this.users.map((item) => {
      if (item.id === user.id) {
        item.name = user.name;
        item.username = user.username;
        item.age = user.age;
      }
      return item;
    });
    this.users = result;
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  deleteUser(user: IUser) {
    const result = this.users.filter((item) => {
      return item.id !== user.id;
    });
    this.users = result;
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
export const userStore = new UserStore();
