import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateTo(view: string) {
    if (view === 'cadastrar') {
      this.router.navigate(['/cadastrar']);
    } else if (view === 'extrato') {
      this.router.navigate(['/extrato']);
    } else {
      this.router.navigate([''])
    }
  }
}
