import { Injectable } from '@angular/core';
import { Empleado } from '../inteface/empleado.inteface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private baseUrl: string = 'http://localhost:8080/api/empleados';

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.baseUrl}`);
  }

  saveEmpleado(empleado: Empleado): Observable<Empleado>{
    return this.http.post<Empleado>(`${this.baseUrl}`, empleado);
  }

  updateEmpleado(empleado: Empleado, id: number): Observable<Empleado>{
    console.log(empleado);
    
    return this.http.put<Empleado>(`${this.baseUrl}/${id}`, empleado);
  }

  findById(id: number): Observable<Empleado>{
    return this.http.get<Empleado>(`${this.baseUrl}/${id}`);
  }

  deleteEmpleado(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
