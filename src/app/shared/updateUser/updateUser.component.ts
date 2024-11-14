import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/interfaces/userInterface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-updateUser',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './updateUser.component.html',
  styleUrls: ['./updateUser.component.css']
})
export class UpdateUserComponent implements OnInit {

  updForm!: FormGroup;
  emailError: boolean = false;
  passwordError: boolean = false;
  editMode: boolean = false;
  user!: User ;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private userSv: AuthService
  ) { 
    this.user = JSON.parse(localStorage.getItem('user')!)
  }

  ngOnInit() {

    let {name, last_name, email } = this.user

    this.updForm = this.formBuilder.group({
      name: [name, Validators.required ],
      last_name: [last_name, Validators.required ],
      email: [email, Validators.required ],
      password: ['' ]
    });
  }
  update() {
    if (this.updForm.valid) {
      this.userSv.updateUser(this.updForm.value);
    } else {
    }
  }

  close() {
    this.activeModal.close('Modal cerrado con éxito');
  }

  // Método para rechazar el modal (por ejemplo, cuando ocurre un error o cancelación)
  dismiss() {
    this.activeModal.dismiss('Modal cancelado');
  };

}
