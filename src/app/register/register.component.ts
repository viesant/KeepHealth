import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import dayjs from 'dayjs';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
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
    CardModule,
    // ToastModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private router: Router) {}
  // constructor(private router: Router, private messageService: MessageService) {}

  registerForm = new FormGroup({
    name: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    email: new FormControl<string | null>(null, [
      Validators.required,
      Validators.email,
    ]),
    birthday: new FormControl<Date | null>(null, [Validators.required]),
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
      const nameForm = this.registerForm.get('name')?.value;
      const emailForm = this.registerForm.get('email')?.value;
      const birthdayForm = dayjs(
        this.registerForm.get('birthday')?.value
      ).format('DD/MM/YYYY');
      const passwordForm = this.registerForm.get('password')?.value;
      const passConfirmForm = this.registerForm.get('passConfirm')?.value;
      if (passwordForm === passConfirmForm) {
        const userListString = localStorage.getItem('userList');
        const userList = !!userListString ? JSON.parse(userListString) : [];
        if (
          userList.find((user: { email: string }) => user.email === emailForm)
        ) {
          alert('Email já cadastrado!');
          return;
        }
        userList.push({
          name: nameForm,
          email: emailForm,
          birthday: birthdayForm,
          password: passwordForm,
        });
        console.log(userList);
        localStorage.setItem('userList', JSON.stringify(userList));
        alert('Usuario ' + emailForm + ' cadastrado com sucesso!');
        this.registerForm.reset();
      } else {
        //erro: password diferente!
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
