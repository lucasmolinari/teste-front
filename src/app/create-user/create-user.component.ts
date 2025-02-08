import { Component, inject } from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  imports: [UserFormComponent],
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent {
  userService: UserService = inject(UserService);
  private readonly router = inject(Router);
  onSaveUser(user: User) {
    this.userService.addUser(user).then((res) => {
      if (res.ok) {
        this.router.navigate(['']);
      }
    });
  }

  onCancel() {
    this.router.navigate(['']);
  }
}
