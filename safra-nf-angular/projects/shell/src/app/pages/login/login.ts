import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-shell-login',
   imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  username = '';
  password = '';

  
  constructor(
    private auth: AuthService, 
    private router: Router
  ) {
    
    
  }

  login() {
    if (this.auth.login(this.username, this.password)) {
      this.router.navigate(['/']);
    } else {
      alert('Login inválido');
    }
  }

}
