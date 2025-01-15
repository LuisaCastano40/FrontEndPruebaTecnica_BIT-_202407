import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  _authService = inject(LoginService);
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  get isLoggedIn() :boolean {
    return this._authService.isLoggedIn()
  }

  logout() {
    this._authService.logout()
  }

}
