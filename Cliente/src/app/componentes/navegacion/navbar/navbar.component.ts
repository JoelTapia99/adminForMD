import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../servicios/login-service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  administrador: any;
  
  constructor(private service: LoginService, private router: Router,) {

   }

  ngOnInit() {
    this.getAdministradores();
  }

  getAdministradores(): void{
    let admin = localStorage.getItem("currentUser");
    this.administrador = JSON.parse(admin);
  }

  cerrarSesion(): void {
    this.service.logoutUser().subscribe(data => {});
    this.router.navigate(['/login']);
  }
}
