import { Component } from '@angular/core';

interface Tarea {
  nombre: string;
  completada: boolean;
}

interface Mecanico {
  nombre: string;
  tareas: Tarea[];
}

@Component({
  selector: 'app-tec',
  templateUrl: './tec.component.html',
  styleUrls: ['./tec.component.scss']
})
export class TecComponent {
  mecanicos: Mecanico[] = [
    {
      nombre: 'Mecánico 1',
      tareas: [
        { nombre: 'Revisar motor', completada: false },
        { nombre: 'Cambiar aceite', completada: false }
      ]
    },
    {
      nombre: 'Mecánico 2',
      tareas: [
        { nombre: 'Ajustar suspensión', completada: false },
        { nombre: 'Reemplazar batería', completada: false }
      ]
    },
    {
      nombre: 'Mecánico 3',
      tareas: [
        { nombre: 'Ajustar suspensión', completada: false },
        { nombre: 'Reemplazar batería', completada: false }
      ]
    },
    {
      nombre: 'Mecánico 4',
      tareas: [
        { nombre: 'Ajustar suspensión', completada: false },
        { nombre: 'Reemplazar batería', completada: false }
      ]
    }
  ];

  agregarTarea(mecanico: Mecanico, tareaNombre: string): void {
    if (tareaNombre.trim()) {
      mecanico.tareas.push({ nombre: tareaNombre, completada: false });
    }
  }

  completarTarea(tarea: Tarea): void {
    tarea.completada = !tarea.completada;
  }
}
