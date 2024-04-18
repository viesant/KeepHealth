import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router, private auth: AuthService) {}

  logout() {
    console.log('sair da sessão!');
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
