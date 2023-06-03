import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'empleados',
    pathMatch: 'full'
  },
  {
    path: 'empleados',
    loadChildren: () => import('./modules/empleados/empleados.module').then(m => m.EmpleadosModule)
  },
  {
    path: '**',
    redirectTo: 'empleados'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
