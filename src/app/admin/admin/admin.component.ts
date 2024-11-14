import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../admin/product.service'; // Asegúrate de que la ruta sea correcta
import { TechnicianService } from 'src/app/services/techinician.service';
import { User } from 'src/app/interfaces/techniciansInterface';
import { Subscription } from 'rxjs';
import { AppoinmentService } from 'src/app/services/appoinment.service';
import { Doc } from 'src/app/interfaces/appoinment.Interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentViewComponent } from 'src/app/shared/appointmentView/appointmentView.component';

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
  technicians!: User[] | [];
  appoinments!: Doc[] | [];
  private subscription: Subscription = new Subscription();

  constructor(
    private productService: ProductService,
    private techinicianSv: TechnicianService,
    private appoinmentSv: AppoinmentService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.topSelling = this.productService.getProducts(); // Inicializa topSelling con los datos del servicio
   
    this.subscription = this.techinicianSv.technicians$.subscribe(technicians => {
      this.technicians = technicians;
    });
   
    this.subscription = this.appoinmentSv.appoinments$.subscribe(appoinments => {
      this.appoinments = appoinments;
    });

    this.techinicianSv.getTechnicians();
    this.appoinmentSv.getAppoinments();
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

  viewAppointment(appo: any) {
    const modalView = this.modalService.open(AppointmentViewComponent, { ariaLabelledBy: 'modal-basic-title' })
    modalView.componentInstance.appointment = appo;
    modalView.componentInstance.rol = "Admin";

    modalView.result.then((result) => {
      // Puedes manejar la lógica aquí cuando el modal se cierre con un resultado
    }, (reason) => {
      // Puedes manejar la lógica aquí cuando el modal se cierre sin un resultado
    });
  }
}
