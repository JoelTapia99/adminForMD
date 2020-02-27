import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuponesService {

  constructor(private http: HttpClient) { }

  getCuponesPorCodigo(codigo: string) {
    let admin = localStorage.getItem("currentUser");
    let admin_json = JSON.parse(admin);
    return this.http.get(`http://localhost:3000/cupones/filtrado?id=${admin_json.id_local}&codigo=${codigo}`);
  }

  getCupones() {
    let admin = localStorage.getItem("currentUser");
    let admin_json = JSON.parse(admin);
    return this.http.get(`http://localhost:3000/cupones/${admin_json.id_local}`);
  }

  deleteCupones(id: number, fecha: Date){
    return this.http.put(`http://localhost:3000/cupones/${id}`, {fecha: fecha});
  }
}
