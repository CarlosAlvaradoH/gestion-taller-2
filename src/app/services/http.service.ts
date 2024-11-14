import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  request<T>(
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE' | "PUT",
    url: string,
    body: any = null,
    params: HttpParams = new HttpParams(),
  ): Observable<T> {
    switch (method) {
      case 'GET':
        return this.http.get<T>(url, { params });
      case 'POST':
        return this.http.post<T>(url, body, { params });
      case 'PATCH':
        return this.http.patch<T>(url, body, { params });
      case 'PUT':
        return this.http.put<T>(url, body);
      case 'DELETE':
        return this.http.delete<T>(url, { params });
      default:
        throw new Error(`Método HTTP no soportado: ${method}`);
    }
  }
  
}
