import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { Services } from '../interfaces/services.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  getSv = environment.getSv;
  private servicesSubject = new BehaviorSubject<Services[]>([]);
  public services$ = this.servicesSubject.asObservable();

constructor(private httpSv: HttpService) { }

getServices() {
  this.httpSv
    .request("GET", this.getSv)
    .pipe(
      catchError(error => {
        // Manejamos el error aquí y mostramos un alert
        alert('Error al realizar la solicitud: ' + error.message);
        return of(null); // Retornamos un Observable vacío para finalizar la secuencia
      })
    )
    .subscribe({
      next: (response: Services | any) => {
        if (response) {
          this.servicesSubject.next(response)
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
