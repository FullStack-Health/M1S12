import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-class';

  ngOnInit(){
    localStorage.setItem("login", "ray@gmail.com");
    localStorage.setItem("password", "123456");
    localStorage.setItem("permition", "doutor");
  }
}
