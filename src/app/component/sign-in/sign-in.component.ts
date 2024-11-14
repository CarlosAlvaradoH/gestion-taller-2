import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  myForm!: FormGroup;
  emailError: boolean = false;
  passwordError: boolean = false

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private UserSv: AuthService
  ) {}

  ngOnInit(): void {
    
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    
  };

    // Método que se llama cuando el formulario se envía
    onSubmit() {
      if (this.myForm.valid) {
        this.UserSv.login(this.myForm.value);
        this.close();
      } else {
        this.emailError = this.myForm.controls['email'].errors!['required']
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
