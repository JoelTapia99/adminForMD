import { Component, OnInit } from '@angular/core';
import { AlbunService } from "./services/develop/albun.service"
import { Albun } from "./class/algun";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  algun: Albun[] = [];

  constructor( public albunService: AlbunService ){

  }

  ngOnInit() { //se ejecuta apenas el componente sea creado
    this.albunService.getAlbun()
    .subscribe(
      albun => {
        console.log(albun);
        this.algun = albun;
      },
      err => console.log(err)
      
    )
  }
  

}

