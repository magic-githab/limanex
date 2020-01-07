import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get = (url: string, options?: any): any =>
    this.http.get(environment.apiUrl + url, options);

  post = (url: string, body: any, options?: any): Observable<any> =>
    this.http.post(environment.apiUrl + url, body, options);

  patch = (url: string, body: any, options?: any): any =>
    this.http.patch(environment.apiUrl + url, body, options);

  delete = (url: string, options?: object): any =>
    this.http.delete(environment.apiUrl + url, options);
}
