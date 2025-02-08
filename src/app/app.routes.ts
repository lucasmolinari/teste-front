import { Routes } from '@angular/router';
import { UsersTableComponent } from './users-table/users-table.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

export const routes: Routes = [
  { path: '', component: UsersTableComponent },
  { path: 'new-user', component: CreateUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
];
