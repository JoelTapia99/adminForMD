import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PremiosService {

  constructor(private http: HttpClient) { }

  getPremios() {
    return this.http.get('http://localhost:3000/premios/1/false');
  }

  getPremiosEliminados(){
    return this.http.get('http://localhost:3000/premios/1/true');
  }

  deletePremios(id: number){
    return this.http.delete(`http://localhost:3000/premios/${id}/d`);
  }

  recoverPremios(id: number){
    return this.http.delete(`http://localhost:3000/premios/${id}/r`);
  }
}
