import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'KeepHealth';

  constructor(private router: Router) {}

  showHeadSidebar(): boolean {
    // console.log(this.router.url);
    return this.router.url != '/login' && this.router.url != '/cadastro';
  }
}
