import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Subscription } from 'rxjs';
import { Services } from 'src/app/interfaces/services.interface';
import { TechnicianService } from 'src/app/services/techinician.service';
import { User } from 'src/app/interfaces/techniciansInterface';
import { appoinmentsDay, appoinmentsShift } from 'src/dictionary/appoinments';
import { AppoinmentService } from 'src/app/services/appoinment.service';

@Component({
  selector: 'app-appointmentCreate',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './appointmentCreate.component.html',
  styleUrls: ['./appointmentCreate.component.css']
})
export class AppointmentCreateComponent implements OnInit {

  myForm!: FormGroup;
  availableServices!: Services[];
  technicians!: User[] | [];
  days = appoinmentsDay;
  shifts = appoinmentsShift

  private subscription: Subscription = new Subscription();


  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private servicesSv: ServicesService,
    private techinicianSv: TechnicianService,
    private appoinmentSv: AppoinmentService
  ) {
    this.subscription = this.techinicianSv.technicians$.subscribe(technicians => {
      this.technicians = technicians;
      console.log("Los tecnicos: ", technicians)
    });

    this.subscription = this.servicesSv.services$.subscribe(services => {
      this.availableServices = services;
    });
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      idMechanic: ['', Validators.required],
      day: [, Validators.required],
      shift: [, Validators.required],
      services: [[], Validators.required],
      status: [1, Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Formulario enviado con éxito:', this.myForm.value);
      // this.userSv.register(this.myForm.value); //todo: meter servicio para crear cita
      this.appoinmentSv.createAppoinments(this.myForm.value)
      this.close();
    } else {
      console.log('El formulario es inválido');
      console.log('El form: ', this.myForm.controls['firstName']);
    }
  }

  toggleService(service: string) {
    const servicesArray = this.myForm.get('services')?.value || [];

    if (servicesArray.includes(service)) {
      // Quitar el servicio si ya está en el array
      const updatedArray = servicesArray.filter((s: string) => s !== service);
      this.myForm.get('services')?.setValue(updatedArray);
    } else {
      // Agregar el servicio si no está en el array
      servicesArray.push(service);
      this.myForm.get('services')?.setValue(servicesArray);
    }
  }

  filterTec(){
    console.log(
      "idMecanico: ", this.myForm.controls['idMechanic'].value,
      "Day: ", this.myForm.controls['day'].value,
      "Serv disponibles: ", this.availableServices 
    )
  }



  updateAppointment() { }

  // === Modal Manage ===
  close() {
    this.activeModal.close('Modal cerrado con éxito');
  }

  // Método para rechazar el modal (por ejemplo, cuando ocurre un error o cancelación)
  dismiss() {
    this.activeModal.dismiss('Modal cancelado');
  };

}
