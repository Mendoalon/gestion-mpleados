package com.gestion.empleados.controller;

import com.gestion.empleados.entity.Empleado;
import com.gestion.empleados.service.EmpleadoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/empleados")
public class EmpleadoController {

    private final EmpleadoService empleadoService;

    public EmpleadoController(EmpleadoService empleadoService) {
        this.empleadoService = empleadoService;
    }

    /**
     * Metodo para listar todos los empleados
     * @return Listado de empleados.
     */
    @GetMapping
    public List<Empleado> listarEmpleados() {
        return this.empleadoService.findAllEmpleados();
    }

    @PostMapping
    public Empleado saveEmpleado(@RequestBody Empleado empleado) {
        return this.empleadoService.saveEmpleado(empleado);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Empleado> getEmpleado(@PathVariable Integer id) {
        return this.empleadoService.findEmpleadoById(id);
    }

    @PutMapping("/{id}")
    public Empleado updateEmpleado(@PathVariable Integer id, @RequestBody Empleado empleado) {
        return this.empleadoService.updateEmpleado(id, empleado);
    }

    @DeleteMapping("/{id}")
    public void deleteEmpleado(@PathVariable Integer id) {
        this.empleadoService.deleteEmpleado(id);
    }
}