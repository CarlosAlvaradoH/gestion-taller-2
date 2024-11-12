import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Doc } from 'src/app/interfaces/appoinment.Interface';
import { AppoinmentService } from 'src/app/services/appoinment.service';
import { TechnicianService } from 'src/app/services/techinician.service';
import { AppointmentCreateComponent } from 'src/app/shared/appointmentCreate/appointmentCreate.component';
import { AppointmentViewComponent } from 'src/app/shared/appointmentView/appointmentView.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  appoinments!: Doc[] | [];
  private subscription: Subscription = new Subscription();

  constructor(
    private appoinmentSv: AppoinmentService,
    private modalService: NgbModal,
    private techinicianSv: TechnicianService
    
  ){}ngOnInit(): void {
    this.subscription = this.appoinmentSv.appoinments$.subscribe(appoinments => {
      this.appoinments = appoinments;
    });

    this.appoinmentSv.getAppoinments();
    this.techinicianSv.getTechnicians();
  }
;

  viewAppointment(appo: any) {
    const modalView = this.modalService.open(AppointmentViewComponent, { ariaLabelledBy: 'modal-basic-title' })
    modalView.componentInstance.appointment = appo;
    modalView.componentInstance.rol = "Admin";

    modalView.result.then((result) => {
      console.log(`Closed with: ${result}`);
      // Puedes manejar la lógica aquí cuando el modal se cierre con un resultado
    }, (reason) => {
      console.log(`Dismissed ${reason}`);
      // Puedes manejar la lógica aquí cuando el modal se cierre sin un resultado
    });
  }

  appoCreate() {
    const modalView = this.modalService.open(AppointmentCreateComponent, { ariaLabelledBy: 'modal-basic-title' })
    // modalView.componentInstance.appointment = appo;
    // modalView.componentInstance.rol = "Admin";

    modalView.result.then((result) => {
      console.log(`Closed with: ${result}`);
      // Puedes manejar la lógica aquí cuando el modal se cierre con un resultado
    }, (reason) => {
      console.log(`Dismissed ${reason}`);
      // Puedes manejar la lógica aquí cuando el modal se cierre sin un resultado
    });
  }

}
