import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  userName: string = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    const userMail = this.auth.getStatus();
    const userListString = localStorage.getItem('userList');
    const userList = !!userListString ? JSON.parse(userListString) : [];
    userList.forEach((u: { email: string; name: string }) => {
      if (u.email === userMail) {
        this.userName = u.name;
        return;
      }
    });
  }
}
