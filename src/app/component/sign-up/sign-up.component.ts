import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  myForm!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private userSv: AuthService
  ) {}

  ngOnInit(): void {
    
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      document: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  };

    // Método que se llama cuando el formulario se envía
    onSubmit() {
      if (this.myForm.valid) {
        this.userSv.register(this.myForm.value);
        this.close();
      } else {
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
