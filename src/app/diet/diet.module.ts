import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DietComponent } from './diet.component';
import { DietDetailComponent } from './diet-detail/diet-detail.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';

const routes: Routes = [
  {
    path: '',

    component: DietComponent,
  },
  {
    path: ':id',
    component: DietDetailComponent,
  },
];

@NgModule({
  declarations: [DietComponent, DietDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    RouterLink,
    InputTextModule,
    CardModule,
    PanelModule,
  ],
  exports: [DietComponent, DietDetailComponent],
})
export class DietModule {}
