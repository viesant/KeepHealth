import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CmToMeterPipe } from '../shared/pipes/cm-to-meter.pipe';
import { InputMaskModule } from 'primeng/inputmask';
import { InputGroupModule } from 'primeng/inputgroup';
import { FormsModule } from '@angular/forms';
import { AddressService } from '../shared/services/address.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    InputTextModule,
    PanelModule,
    ButtonModule,
    CmToMeterPipe,
    InputMaskModule,
    InputGroupModule,
    FormsModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  postalCode!: string;
  address: any = null;

  user = {
    name: '',
    email: '',
    code: '31',
    age: '37',
    weight: '75',
    height: '175',
  };

  constructor(
    private auth: AuthService,
    private addressService: AddressService
  ) {}

  ngOnInit(): void {
    const userMail = this.auth.getStatus();

    const userListString = localStorage.getItem('userList');
    const userList = !!userListString ? JSON.parse(userListString) : [];
    const userFinded = userList.find(
      (u: { email: string }) => u.email === userMail
    );

    this.user.name = userFinded['name'];
    this.user.email = userFinded['email'];
  }

  findPostalCode() {
    if (!!this.postalCode) {
      let that = this;
      this.addressService.get(this.postalCode).subscribe({
        next(value) {
          if (value && value.erro == true) {
            that.address = 'notfound';
          } else {
            that.address = value;
          }
        },
        error(err) {
          console.log(err);
          that.address = null;
        },
      });
    } else {
      this.address = null;
    }
  }
}
