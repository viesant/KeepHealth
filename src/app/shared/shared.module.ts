import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, RouterLink, ButtonModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class SharedModule {}
