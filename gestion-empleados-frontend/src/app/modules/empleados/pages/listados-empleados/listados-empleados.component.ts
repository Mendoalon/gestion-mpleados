import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../inteface/empleado.inteface';
import { EmpleadosService } from '../../services/empleados.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listados-empleados',
  templateUrl: './listados-empleados.component.html',
  styleUrls: ['./listados-empleados.component.css']
})
export class ListadosEmpleadosComponent implements OnInit {
  empleados!:Empleado[];

  constructor(private _empleadosService: EmpleadosService,
              private _router: Router ) { }

  ngOnInit(): void {
    this.optenerEmpleados();

   }

   private optenerEmpleados(): void {
    this._empleadosService.getEmpleados().subscribe(empleados =>{
      this.empleados =empleados;
    }); 
   }

   updateEmple(id:number): void {
    this._router.navigate(['empleados/actualizar-empleado/',id]);

   }

   deleteEmple(id: number): void {
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          
          this._empleadosService.deleteEmpleado(id).subscribe({
            next: () => {
              this.optenerEmpleados();
            },
            error: err => {
              console.log(err);
            }
          });

          Swal.fire(
            'Eliminado',
            'El empleado ha sido eliminado correctamente',
            'success'
          );
        }
      });
    }


  verDetalles(id: number): void {    
    this._router.navigate(['empleados/detalle-empleado/', id]);
  }
}


