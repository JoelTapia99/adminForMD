import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Albun } from 'src/app/class/algun';


@Injectable({
  providedIn: 'root'
})
export class AlbunService {

  constructor(private http: HttpClient) { }

  getAlbun() {
    return this.http.get<Albun[]>('https://jsonplaceholder.typicode.com/photos?_limit=5');
  }

}
