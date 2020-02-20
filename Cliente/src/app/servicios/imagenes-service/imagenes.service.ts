import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private http: HttpClient) { }

  getImagenes() {
    return this.http.get('http://localhost:3000/imagenes');
  }
}
