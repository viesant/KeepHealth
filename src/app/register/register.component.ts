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
    passwordConfirm: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  submitForm() {
    if (this.registerForm.valid) {
    }
  }
}
