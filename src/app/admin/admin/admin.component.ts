import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../admin/product.service'; // Asegúrate de que la ruta sea correcta

interface Tarea {
  nombre: string;
  completada: boolean;
}

interface Mecanico {
  nombre: string;
  tareas: Tarea[];
  porcentaje: number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  topSelling: Product[] = []; // Define la propiedad topSelling en la clase
  mecanicos: Mecanico[] = []; // Inicializa el array de mecánicos

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.topSelling = this.productService.getProducts(); // Inicializa topSelling con los datos del servicio

    // Inicializa los mecánicos con sus tareas
    this.mecanicos = [
      {
        nombre: 'Mecánico 1',
        tareas: [
          { nombre: 'Cambio de Aceite', completada: false },
          { nombre: 'Revisión de Luces', completada: false },
          { nombre: 'Revisión Técnico-mecánica', completada: false },
          { nombre: 'Cambio de Batería', completada: false },
        ],
        porcentaje: 0,
      },
      {
        nombre: 'Mecánico 2',
        tareas: [
          { nombre: 'Cambio de Aceite', completada: false },
          { nombre: 'Revisión de Luces', completada: false },
          { nombre: 'Revisión Técnico-mecánica', completada: false },
          { nombre: 'Cambio de Batería', completada: false },
        ],
        porcentaje: 0,
      },
      {
        nombre: 'Mecánico 3',
        tareas: [
          { nombre: 'Cambio de Aceite', completada: false },
          { nombre: 'Revisión de Luces', completada: false },
          { nombre: 'Revisión Técnico-mecánica', completada: false },
          { nombre: 'Cambio de Batería', completada: false },
        ],
        porcentaje: 0,
      },
      {
        nombre: 'Mecánico 4',
        tareas: [
          { nombre: 'Cambio de Aceite', completada: false },
          { nombre: 'Revisión de Luces', completada: false },
          { nombre: 'Revisión Técnico-mecánica', completada: false },
          { nombre: 'Cambio de Batería', completada: false },
        ],
        porcentaje: 0,
      },
    ];
  }

  calcularPorcentaje(mecanico: Mecanico): void {
    const tareasCompletadas = mecanico.tareas.filter(tarea => tarea.completada).length;
    mecanico.porcentaje = Math.round((tareasCompletadas / mecanico.tareas.length) * 100);
  }
}
