import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmpleadosService } from '../../services/empleados.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registra-empleado',
  templateUrl: './registra-empleado.component.html',
  styleUrls: ['./registra-empleado.component.css']
})
export class RegistraEmpleadoComponent{
  empleadoForm!: FormGroup;
  errores: any = {};


  constructor(private _empleadoService: EmpleadosService,
              private router: Router) {
    this.empleadoForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
   }
 
    saveEmpleado() {
      if (this.empleadoForm.valid) {
        this._empleadoService.saveEmpleado(this.empleadoForm.value).subscribe(data => {
          this.router.navigate(['/registra-empleado']);
        });
        }
        
    }
    
  }


