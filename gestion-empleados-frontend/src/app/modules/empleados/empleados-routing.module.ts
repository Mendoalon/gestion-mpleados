import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadosEmpleadosComponent } from './pages/listados-empleados/listados-empleados.component';
import { RegistraEmpleadoComponent } from './pages/registra-empleado/registra-empleado.component';
import { ActualizarEmpleadoComponent } from './pages/actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetalleComponent } from './pages/empleado-detalle/empleado-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'empleados' },
      { path: 'empleados', component: ListadosEmpleadosComponent },
      { path: 'registrar', component: RegistraEmpleadoComponent },
      { path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent },
      { path: 'detalle-empleado/:id', component:  EmpleadoDetalleComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
