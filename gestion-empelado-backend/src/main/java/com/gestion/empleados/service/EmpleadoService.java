package com.gestion.empleados.service;

import com.gestion.empleados.entity.Empleado;
import com.gestion.empleados.exception.ResourceNotFoundException;
import com.gestion.empleados.repository.EmpleadoRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@AllArgsConstructor
@Service
public class EmpleadoService {

    private final EmpleadoRepository empleadoRepository;

    public List<Empleado> findAllEmpleados() {
        return this.empleadoRepository.findAll();
    }
    public Empleado saveEmpleado(Empleado empleado) {
        return  this.empleadoRepository.save(empleado);
    }

    public ResponseEntity<Empleado> findEmpleadoById(Integer id) {
        Empleado empleado = this.empleadoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Empleado no encontrado"));

        return ResponseEntity.ok(empleado);
    }

    public void updateEmpleado(Integer id) {
        this.empleadoRepository.deleteById(id);
    }

    public Empleado updateEmpleado(Integer id, Empleado empleadoUpdate) {
        Empleado empleado = this.empleadoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe empleado"));

        if (empleadoUpdate.getNombre() != null) {
            empleado.setNombre(empleadoUpdate.getNombre());
        }

        if (empleadoUpdate.getApellido() != null) {
            empleado.setApellido(empleadoUpdate.getApellido());
        }

        if (empleadoUpdate.getEmail() != null) {
            empleado.setEmail(empleadoUpdate.getEmail());
        }

        Empleado actualizarEmpleado = this.empleadoRepository.save(empleado);
        return actualizarEmpleado;
    }

    public ResponseEntity<Map<String,Boolean>> deleteEmpleado (Integer id){
        Empleado empleado = this.empleadoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el ID : " + id));

        this.empleadoRepository.deleteById(id);
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminar",Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }

}
