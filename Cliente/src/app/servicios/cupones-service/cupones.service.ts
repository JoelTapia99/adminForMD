import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuponesService {

  constructor(private http: HttpClient) { }

  getCupones() {
    return this.http.get('http://localhost:3000/cupones/1');
  }

  deleteCupones(id: number, fecha: Date){
    return this.http.delete(`http://localhost:3000/cupones/${id}/${fecha}`);
  }
}
