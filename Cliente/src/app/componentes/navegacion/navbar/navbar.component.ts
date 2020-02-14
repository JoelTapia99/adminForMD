import { Component, OnInit } from '@angular/core';
import { AdministradoresService } from '../../../servicios/administradores-service/administradores.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  administradores: object = [];
  
  constructor(private service: AdministradoresService) {

   }

  ngOnInit() {
    this.service.getAdministrador().subscribe(administrador => {
      this.administradores = administrador;
    });
  }
}
