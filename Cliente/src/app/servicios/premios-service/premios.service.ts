import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PremiosService {

  id: number;

  constructor(private http: HttpClient) { }

  getPremios() {
    let admin = localStorage.getItem("currentUser");
    let admin_json = JSON.parse(admin);
    return this.http.get(`http://localhost:3000/premios/${admin_json.id_local}/false`);
  }

  getPremiosEliminados(){
    let admin = localStorage.getItem("currentUser");
    let admin_json = JSON.parse(admin);
    return this.http.get(`http://localhost:3000/premios/${admin_json.id_local}/true`);
  }

  createPremios(premio: object){
    return this.http.post('http://localhost:3000/premios', premio);
  }

  recogerID(id: number){
    this.id = id;
  }

  editPremios(id: number, premio: object){
    return this.http.put(`http://localhost:3000/premios/${id}`, premio);
  }

  deletePremios(id: number){
    return this.http.delete(`http://localhost:3000/premios/${id}/d`);
  }

  recoverPremios(id: number){
    return this.http.delete(`http://localhost:3000/premios/${id}/r`);
  }

  getPremio(id: number){
    return this.http.get(`http://localhost:3000/premios/${id}`);
  }
}
