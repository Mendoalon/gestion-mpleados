import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadosEmpleadosComponent } from './listados-empleados.component';

describe('ListadosEmpleadosComponent', () => {
  let component: ListadosEmpleadosComponent;
  let fixture: ComponentFixture<ListadosEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadosEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadosEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
