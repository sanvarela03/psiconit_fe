import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    private securityService: SecurityService
  ) { }

  /* HTTP GET */

  get<T>(url: string, httpParams?: any): Observable<HttpResponse<T>> {
    const httpHeaders = this.getHeaders();

    return this.http.get<T>(url,
      {
        headers: httpHeaders,
        params: httpParams,
        observe: 'response'
      }
    );
  }

  /* HTTP POST */

  post<T>(url: string, data: any): Observable<HttpResponse<T>> {

    return this.doPost<T>(url, data);
  }

  private doPost<T>(url: string, data: any): Observable<HttpResponse<T>> {
    const httpHeaders: HttpHeaders = this.getHeaders();

    return this.http.post<T>(url, data,
      {
        headers: httpHeaders,
        observe: 'response'
      }
    );
  }

  /* HTTP PUT */
  put<T>(url: string, data: any): Observable<HttpResponse<T>> {
    return this.doPut<T>(url, data);
  }

  private doPut<T>(url: string, data: any): Observable<HttpResponse<T>> {
    const httpHeaders: HttpHeaders = this.getHeaders();

    return this.http.put<T>(url, data,
      {
        headers: httpHeaders,
        observe: 'response'
      })
  }


  /* HTTP DEL */
  delete<T>(url: string, params?: any): Observable<HttpResponse<T>> {
    const httpHeaders: HttpHeaders = this.getHeaders();

    return this.http.delete<T>(url,
      {
        headers: httpHeaders,
        observe: 'response'
      })
  }

  /* HEADERS - se reemplazara con http interceptors (intercepta todas las llamadas a las api antes de que se hagan) */

  getHeaders(): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders();

    // const token = this.securityService.getAccessToken();

    // if (token) {
    //   httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
    // }

    return httpHeaders;
  }




}
