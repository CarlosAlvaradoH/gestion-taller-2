import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { Technicians, User } from '../interfaces/techniciansInterface';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  private getlistMechanic = environment.getlistMechanic;
  private techniciansSubject = new BehaviorSubject<User[]>([]);
  public technicians$ = this.techniciansSubject.asObservable();

  constructor(private httpSv: HttpService) { }

  getTechnicians() {
    this.httpSv
      .request("GET", this.getlistMechanic)
      .pipe(
        catchError(error => {
          // Manejamos el error aquí y mostramos un alert
          alert('Error al realizar la solicitud: ' + error.message);
          return of(null); // Retornamos un Observable vacío para finalizar la secuencia
        })
      )
      .subscribe({
        next: (response: Technicians | any) => {
          if (response) {
            // Lógica en caso de éxito
            // Guardar cierta información en localStorage, por ejemplo, un token
            this.techniciansSubject.next(response.users)
          }
        },
        error: () => {
          // Este bloque es opcional porque ya manejamos el error en catchError
        },
        complete: () => {
        }
      });
  }

}
