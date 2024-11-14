import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Doc } from 'src/app/interfaces/appoinment.Interface';

@Component({
  selector: 'app-appointmentView',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointmentView.component.html',
  styleUrls: ['./appointmentView.component.css']
})
export class AppointmentViewComponent implements OnInit {

  @Input() appointment!: Doc;
  @Input() rol!: string;
 

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
  }

  updateAppointment() {
  }

  // === Modal Manage ===
  close() {
    this.activeModal.close('Modal cerrado con éxito');
  }

  // Método para rechazar el modal (por ejemplo, cuando ocurre un error o cancelación)
  dismiss() {
    this.activeModal.dismiss('Modal cancelado');
  };

}
