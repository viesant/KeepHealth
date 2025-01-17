import { Component, HostListener } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { formatDate } from '@angular/common';
// import { ToastModule } from 'primeng/toast';
// import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    CalendarModule,
    // ToastModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  isSmallScreen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = window.innerWidth < 720;
  }

  registerForm = new FormGroup({
    name: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    email: new FormControl<string | null>(null, [
      Validators.required,
      Validators.email,
    ]),
    birthday: new FormControl<string | null>(null, [Validators.required]),
    password: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    passConfirm: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  submitForm() {
    if (this.registerForm.valid) {
      const nameField = this.registerForm.get('name')?.value;
      const emailField = this.registerForm.get('email')?.value;
      const birthdayField = this.registerForm.get('birthday')?.value;
      const passwordField = this.registerForm.get('password')?.value;
      const passConfirmField = this.registerForm.get('passConfirm')?.value;
      if (passwordField === passConfirmField) {
        const userListString = localStorage.getItem('userList');
        const userList = !!userListString ? JSON.parse(userListString) : [];
        if (
          userList.find((user: { email: string }) => user.email === emailField)
        ) {
          alert('Email já cadastrado!');
          return;
        }
        userList.push({
          name: nameField,
          email: emailField,
          birthday: birthdayField,
          password: passwordField,
        });
        localStorage.setItem('userList', JSON.stringify(userList));
        alert('Usuario ' + emailField + ' cadastrado com sucesso!');
        this.registerForm.reset();
      } else {
        alert('Senhas devem ser idênticas');

        // primeNG toast: (não funciona, não sei pq)
        // this.messageService.add({
        //   key: 'bc',
        //   severity: 'error',
        //   summary: 'Erro',
        //   detail: 'Senhas não são idênticas',
        // });
      }
    } //form inválido
  }
}
