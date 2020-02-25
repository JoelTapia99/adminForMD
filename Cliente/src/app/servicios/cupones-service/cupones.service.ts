import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuponesService {

  constructor(private http: HttpClient) { }

  getCupones() {
    let admin = localStorage.getItem("currentUser");
    let admin_json = JSON.parse(admin);
    return this.http.get(`http://localhost:3000/cupones/${admin_json.id_local}`);
  }

  deleteCupones(id: number, fecha: Date){
    return this.http.delete(`http://localhost:3000/cupones/${id}/${fecha}`);
  }
}
