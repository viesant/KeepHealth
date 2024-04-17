import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router, private auth: AuthService) {}

  loginForm = new FormGroup({
    email: new FormControl<string | null>(null, [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl<string | null>(null, [Validators.required]),
  });

  submitForm() {
    if (this.loginForm.valid) {
      const emailField = this.loginForm.get('email')?.value || '';
      const passwordField = this.loginForm.get('password')?.value || '';

      const answer = this.auth.login(emailField, passwordField);
      if (answer === 'success') {
        this.router.navigate(['home']);
      } else {
        alert('Usuário e/ou senha inválidos');
      }
    }
  }

  resetPassword() {
    const emailField = this.loginForm.get('email')?.value;
    if (emailField) {
      const userListString = localStorage.getItem('userList');
      if (!!userListString) {
        const userList = JSON.parse(userListString);
        let userFind = false;

        userList.forEach((u: { email: string; password: string }) => {
          if (u.email === emailField) {
            u.password = 'a1b2c3d4';
            alert('Senha atualizada para ' + u.password);
            localStorage.setItem('userList', JSON.stringify(userList));
            userFind = true;
            return;
          }
        });
        if (userFind) return;
        alert('Usuário não encontrado');
        return;
        // }
      } else {
        alert('Nenhum usuário cadastrado, crie nova conta');
        return;
      }
    }
    alert('Digite email cadastrado e tente novamente');
  }
}
