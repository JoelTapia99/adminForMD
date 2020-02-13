import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministradoresService {

  constructor(private http: HttpClient) { }

  getAdministrador() {
    return this.http.get('http://localhost:3000/administradores/1');
  }
}
