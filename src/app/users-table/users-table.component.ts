import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users-table',
  imports: [CommonModule, ConfirmationModalComponent],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css',
})
export class UsersTableComponent {
  userService: UserService = inject(UserService);
  users: User[] = [];
  private readonly router = inject(Router);

  userIdToDelete: number | undefined;
  isModalOpen: boolean = false;

  ngOnInit() {
    this.userService.getAllUsers().then((list) => {
      this.users = list;
    });
  }

  onDelete(id: number | undefined) {
    if (!id) return;
    this.isModalOpen = true;
    this.userIdToDelete = id;
  }

  onConfirmDelete() {
    if (this.userIdToDelete) {
      this.userService.deleteUserById(this.userIdToDelete);
      this.users = this.users.filter((user) => user.id !== this.userIdToDelete);

      this.userIdToDelete = undefined;
    }
  }

  onCancelDelete() {
    this.userIdToDelete = undefined;
  }

  onEdit(id: number | undefined) {
    if (id) {
      this.router.navigate([`/edit-user/${id}`]);
    }
  }

  onAddUser() {
    this.router.navigate(['/new-user']);
  }
}
