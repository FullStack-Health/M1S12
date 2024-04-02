import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: string ="";
  password: string ="";
  
  constructor(private router: Router, private authService: AuthService){}

  verifyLogin(){
    this.authService.login(this.login, this.password);
    this.router.navigate(["home"]);
  }
}
