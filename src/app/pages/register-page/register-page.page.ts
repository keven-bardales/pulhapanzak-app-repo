import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonInput, IonItem, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonInput],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required],
      numeroIdentidad: [
        '',
        [
          Validators.required,
          Validators.minLength(13),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      numeroTelefono: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
    });
  }

  ngOnInit() {
    this.registerForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  get nombres() {
    return this.registerForm.get('nombres');
  }
  get apellidos() {
    return this.registerForm.get('apellidos');
  }
  get correoElectronico() {
    return this.registerForm.get('correoElectronico');
  }
  get contrasena() {
    return this.registerForm.get('contraseña');
  }
  get numeroIdentidad() {
    return this.registerForm.get('numeroIdentidad');
  }
  get numeroTelefono() {
    return this.registerForm.get('numeroTelefono');
  }
}
