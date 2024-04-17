import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { Router } from '@angular/router';
import dayjs from 'dayjs';
// import moment from 'moment';
// import { MessagesModule } from 'primeng/messages';
// import { Message } from 'primeng/api';
// import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    CalendarModule,
    // MessagesModule,
    // MessageModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  // messages: Message[] = [
  //   { severity: 'error', summary: 'Error', detail: 'Closable Message Content' },
  // ];
  constructor(private router: Router) {}

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
    // console.log(dayjs(birthday).format('DD/MM/YYYY'));

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
      }
    } //form inválido
  }
}
