import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { appoinmentsDay, appoinmentsShift, appoinmentStatus } from 'src/dictionary/appoinments';
import { AppointmentsRes, Doc } from '../interfaces/appoinment.Interface';
import { ServicesService } from './services.service';
import { Services } from '../interfaces/services.interface';
import { AppointmentsResCreate } from '../interfaces/appoinmentCreate.Interface';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {

  private getApptList = environment.getApptList;
  private postApptCreate = environment.postApptCreate;
  private appoinmentsSubject = new BehaviorSubject<Doc[]>([]);
  public appoinments$ = this.appoinmentsSubject.asObservable();

  // === Precio total de servicios ====
  total: number = 0;

  private subscription: Subscription = new Subscription();

  // ======= Services =======
  services!: Services[];

  // ====== Dictionaries ======
  days: any[] = appoinmentsDay;
  shifts: any[] = appoinmentsShift;
  status: any[] = appoinmentStatus;

  constructor(
    private httpSv: HttpService,
    private servicesSv: ServicesService
  ) {
    this.subscription = this.servicesSv.services$.subscribe(services => {
      this.services = services;
    });
  }

  getAppoinments() {
    this.httpSv
      .request("GET", this.getApptList)
      .pipe(
        catchError(error => {
          // Manejamos el error aquí y mostramos un alert
          alert('Error al realizar la solicitud: ' + error.message);
          return of(null); // Retornamos un Observable vacío para finalizar la secuencia
        })
      )
      .subscribe({
        next: (response: AppointmentsRes | any) => {
          if (!response.appointments.docs) {
            this.appoinmentsSubject.next([]);
            return
          }
          if (response) {
            // Lógica en caso de éxito
            // Guardar cierta información en localStorage, por ejemplo, un token
            const resp = response.appointments.docs.map((app: Doc) => {
              app.day = this.setDay(app.day);
              app.shift = this.setShift(app.shift);
              app.status = this.setStatus(app.status!);
              app.total = this.getSvPrice(app.services)
              app.services = app.services.map(sv => this.setServices(sv));

            });
            this.appoinmentsSubject.next(response.appointments.docs)
          }
        },
        error: () => {
          // Este bloque es opcional porque ya manejamos el error en catchError
        },
        complete: () => {
        }
      });
  }

  createAppoinments(appointmentData: any) {
    this.httpSv
      .request("POST", this.postApptCreate, appointmentData)
      .pipe(
        catchError(error => {
          // Manejamos el error aquí y mostramos un alert
          alert('Error al crear cita: ' + error.message);
          return of(null); // Retornamos un Observable vacío para finalizar la secuencia
        })
      )
      .subscribe({
        next: (response: AppointmentsResCreate | any) => {

          if (response) {

            this.getAppoinments();
            // Lógica en caso de éxito
            // Guardar cierta información en localStorage, por ejemplo, un token

          }
        },
        error: () => {
          // Este bloque es opcional porque ya manejamos el error en catchError
        },
        complete: () => {
        }
      });
  }

  setDay(day: number) {
    const dayString = this.days.find(d => d.day === day);
    if (dayString) {
      return dayString.message
    }
    return day

  };
  setShift(shift: number) {
    const shiftString = this.shifts.find(s => s.turn === shift);
    if (shiftString) {
      return shiftString.message
    }
    return shift

  };
  setStatus(status: number) {
    const statusString = this.status.find(stt => stt.id === status);
    if (statusString) {
      return statusString.message
    }
    return status

  };
  setServices(service: string) {
    const servicesString = this.services.find(sv => sv._id === service);
    if (servicesString) {
      // this.total += servicesString.price; // si se requiere el total de todos los servicios aca se puede obtener
      return servicesString.service_name
    }
    return service
  };
  getSvPrice(service: string[]): number {
    let price = 0;
    service.map(svBk => this.services
      .find(sv => {
        if (sv._id === svBk) {
          price += sv.price
        }
      }));
    return price
  }

}
