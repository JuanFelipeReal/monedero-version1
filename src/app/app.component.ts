import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Monedero Electronico';
  constructor(private router: Router) {}

  isNotLoginPage() {
    const currentUrl = this.router.url;
    return currentUrl !== '/login' && !currentUrl.includes('/login?success=x');
  }
}
