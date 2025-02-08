import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly api = 'http://localhost:3000/user';

  async addUser(user: User) {
    const res = await fetch(this.api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    return res;
  }

  async getAllUsers(): Promise<User[]> {
    const res = await fetch(this.api);
    return (await res.json()) ?? [];
  }

  async getUserById(id: number): Promise<User> {
    const res = await fetch(`${this.api}/${id}`);
    return (await res.json()) ?? {};
  }

  async editUserById(id: number, updatedUser: User) {
    const res = await fetch(`${this.api}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });
    return res;
  }

  async deleteUserById(id: number) {
    await fetch(`${this.api}/${id}`, {
      method: 'DELETE',
    });
  }

  constructor() {}
}
