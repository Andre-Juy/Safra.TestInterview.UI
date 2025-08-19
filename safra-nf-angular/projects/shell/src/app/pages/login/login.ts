import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ResponseModel } from '@mf-workspace/shared';

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
    
    this.auth.login(this.username, this.password)
    .subscribe((res: ResponseModel) => {

      if(res.result.success){
        this.auth.storeToken(res.result.result);
       window.location.href = "http://localhost:4200/";
      }else{
        alert("Usuário ou senha incorretos!")
      }
    })

  }

}
