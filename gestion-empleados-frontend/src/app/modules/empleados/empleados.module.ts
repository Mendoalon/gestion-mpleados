import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { ListadosEmpleadosComponent } from './pages/listados-empleados/listados-empleados.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistraEmpleadoComponent } from './pages/registra-empleado/registra-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './pages/actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetalleComponent } from './pages/empleado-detalle/empleado-detalle.component';



@NgModule({
  declarations: [
    ListadosEmpleadosComponent,
    NavbarComponent,
    HomeComponent,
    RegistraEmpleadoComponent,
    ActualizarEmpleadoComponent,
    EmpleadoDetalleComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpleadosModule { }
