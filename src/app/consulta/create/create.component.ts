import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  consultaForm: FormGroup = this.formBuilder.group({
    pacienteNome: ['', Validators.required],
    pacienteIdade: ['', Validators.required],
    medico: ['', Validators.required],
    data: ['', Validators.required],
    hora: ['', Validators.required],
    motivo: ['', Validators.required],
    alergias: ['', Validators.required],
    obs: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {}

  cadastrar() {
    console.log('Consulta cadastrada!');
    this.router.navigate(['consulta']);
  }
}
