import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Doc } from 'src/app/interfaces/appoinment.Interface';
import { AppoinmentService } from 'src/app/services/appoinment.service';
import { AppointmentViewComponent } from 'src/app/shared/appointmentView/appointmentView.component';



@Component({
  selector: 'app-tec',
  templateUrl: './tec.component.html',
  styleUrls: ['./tec.component.scss']
})
export class TecComponent implements OnInit {
  appoinments!: Doc[] | [];
  private subscription: Subscription = new Subscription();

  constructor(
    private appoinmentSv: AppoinmentService,
    private modalService: NgbModal
  ){}

  ngOnInit(): void {
    this.subscription = this.appoinmentSv.appoinments$.subscribe(appoinments => {
      this.appoinments = appoinments;
    });

    this.appoinmentSv.getAppoinments();

  }
  
//   agregarTarea(mecanico: Mecanico, tareaNombre: string): void {
//     if (tareaNombre.trim()) {
//       mecanico.tareas.push({ nombre: tareaNombre, completada: false });
//     }
//   }

//   completarTarea(tarea: Tarea): void {
//     tarea.completada = !tarea.completada;
//   }

viewAppointment(appo: any) {
  const modalView = this.modalService.open(AppointmentViewComponent, { ariaLabelledBy: 'modal-basic-title' })
  modalView.componentInstance.appointment = appo;
  modalView.componentInstance.rol = "Mechanic";

  modalView.result.then((result) => {
    // Puedes manejar la lógica aquí cuando el modal se cierre con un resultado
  }, (reason) => {
    // Puedes manejar la lógica aquí cuando el modal se cierre sin un resultado
  });
}

}
