import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/interfaces/userInterface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  myForm!: FormGroup;
  emailError: boolean = false;
  passwordError: boolean = false;
  editMode: boolean = false;
  user: User ;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private userSv: AuthService
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!)
  }

  ngOnInit(): void {
    let {name, last_name, email} = this.user
    
    console.log("Usuario: ", this.user)
    this.myForm = this.formBuilder.group({
      name: [name ],
      last_name: [last_name ],
      email: [email ],
      password: ['' ]
    });
    
  };

    // Método que se llama cuando el formulario se envía
    onSubmit() {
      if (this.myForm.valid) {
        console.log('Formulario enviado con éxito:', this.myForm.value);
        this.userSv.updateUser(this.myForm.value);
      } else {
        console.log('El formulario es inválido');
        console.log('El form: ', this.myForm.controls['firstName']);
      }
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
