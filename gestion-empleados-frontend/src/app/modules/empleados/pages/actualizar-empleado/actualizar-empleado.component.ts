import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadosService } from '../../services/empleados.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Empleado } from '../../inteface/empleado.inteface';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {
  id!: number;
  empleadoForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _empleadoService: EmpleadosService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.empleadoForm = this._formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required] ],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]]
    });

    this._empleadoService.findById(this.id).subscribe(
      dato => {
        this.empleadoForm.patchValue(dato);
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    if (this.empleadoForm.invalid) {
      return;
    }

    const empleado: Empleado = this.empleadoForm.value;

    this._empleadoService.updateEmpleado( empleado,this.id,).subscribe({
      next: () => {
        this.updateEmpleado();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  updateEmpleado() {
    this._router.navigate(['/empleados']);
    Swal.fire({
      title: 'Empleado actualizado',
      text: `El empleado ${this.empleadoForm.value.nombre} ha sido actualizado con éxito`,
      icon: 'success'
    });
  }
}
