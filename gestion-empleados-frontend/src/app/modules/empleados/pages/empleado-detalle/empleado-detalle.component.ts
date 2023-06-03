import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../inteface/empleado.inteface';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../../services/empleados.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.component.html',
  styleUrls: ['./empleado-detalle.component.css']
})
export class EmpleadoDetalleComponent implements OnInit {
  id!:number;
  empleado!: Empleado;

  constructor(private _router:ActivatedRoute, private _empleadoService:EmpleadosService) {
   
    }
  
  ngOnInit(): void {
    this.id = this._router.snapshot.params['id'];
    this._empleadoService.findById(this.id).subscribe(empleado =>{
      this.empleado = empleado;
      Swal.fire({
        title: `Detalles del empleado ${this.empleado.nombre}`,
        icon: 'info'
      });
    })
  }

}
