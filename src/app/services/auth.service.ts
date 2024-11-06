import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
import { catchError, of } from 'rxjs';
import { LoginResponse, User } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  postUserLogin = environment.postUserLogin;
  postUserRegister = environment.postUserRegister;
  getUserProfile = environment.getUserProfile;
  putUserUpdate = environment.putUserUpdate;
  patchUserDelete = environment.patchUserDelete;
  getUserList = environment.getUserList;
  getUserListCustomer = environment.getUserListCustomer;
  patchUserActiveCustomer = environment.patchUserActiveCustomer;
  putUpdateProfile = environment.putUpdateProfile;

  constructor(private httpSv: HttpService) { }

  login(user: any){
    this.httpSv
    .request("POST", this.postUserLogin, user)
    .pipe(
      catchError(error => {
        // Manejamos el error aquí y mostramos un alert
        alert('Error al realizar la solicitud: ' + error.message);
        return of(null); // Retornamos un Observable vacío para finalizar la secuencia
      })
    )
    .subscribe({
      next: (response: LoginResponse | any) => {
        if (response) {
          // Lógica en caso de éxito
          alert('Solicitud exitosa');
          console.log("respuuu: ", response)
          // Guardar cierta información en localStorage, por ejemplo, un token
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
          window.location.reload();
        }
      },
      error: () => {
        // Este bloque es opcional porque ya manejamos el error en catchError
      },
      complete: () => {
        console.log('Operación completada');
      }
    });
  };

  register(user: any){
    this.httpSv
    .request("POST", this.postUserRegister, user)
    .pipe(
      catchError(error => {
        // Manejamos el error aquí y mostramos un alert
        alert('Error al realizar la solicitud: ' + error.message);
        return of(null); // Retornamos un Observable vacío para finalizar la secuencia
      })
    )
    .subscribe({
      next: response => {
        if (response) {
          // Lógica en caso de éxito
          alert('Solicitud exitosa, ya puedes iniciar sesion');
          // Guardar cierta información en localStorage, por ejemplo, un token
          // localStorage.setItem('miToken', response.token);
        }
      },
      error: () => {
        // Este bloque es opcional porque ya manejamos el error en catchError
      },
      complete: () => {
        console.log('Operación completada');
      }
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user')!);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
