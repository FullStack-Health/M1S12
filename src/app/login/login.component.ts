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
  loginObj: any = { username: "", password: ""};

  constructor(private router: Router, private authService: AuthService){}

  login(){
    this.authService.login(this.loginObj.username, this.loginObj.password);
    this.router.navigate(["home"]);
  }
}
