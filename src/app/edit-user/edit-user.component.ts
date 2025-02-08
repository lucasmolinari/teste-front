import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { UserFormComponent } from '../user-form/user-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  imports: [UserFormComponent, CommonModule],
  templateUrl: './edit-user.component.html',
})
export class EditUserComponent {
  userService: UserService = inject(UserService);
  userId = -1;
  user?: User;
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.userService.getUserById(id).then((user) => {
        this.user = user;
        console.log(this.user, user);
      });
      this.userId = id;
    }
  }

  onEditUser(user: User) {
    if (this.userId >= 0) {
      this.userService.editUserById(this.userId, user).then((res) => {
        if (res.ok) {
          this.router.navigate(['']);
        }
      });
    }
  }
  onCancel() {
    this.router.navigate(['']);
  }
}
