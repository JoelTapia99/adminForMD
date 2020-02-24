import { Component, OnInit } from '@angular/core';
import { CuponesService } from '../../servicios/cupones-service/cupones.service';
import { AdministradoresService } from '../../servicios/administradores-service/administradores.service';
import  jsPDF  from 'jspdf';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.less']
})
export class TicketComponent implements OnInit {

  cupones: any;
  a: any;

  constructor(
    private c_service: CuponesService,
    private a_service: AdministradoresService,
  ) { }

  ngOnInit() {
    this.getCupones();
    this.getAdministrador();
    //this.generarPDF();
  }

  getCupones(): void{
    this.c_service.getCupones().subscribe(cupones => {
      this.cupones = cupones;
    });
  }

  getAdministrador(): void{
    this.a_service.getAdministrador().subscribe(admin => {
      this.a = admin[0];
    });
  }

  generarPDF(id: number, fecha: Date): void{
    var doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a6'
    });
    //Logo de la empresa
    doc.rect(5, 5, 20, 20);
    //Información de la empresa
    doc.setFontSize(12);
    doc.text(this.a.nombre_local, 30, 13);
    doc.text(`${this.a.nombre_pais}, ${this.a.direccion_local}`, 30, 20);
    //Información de la nota de venta
    doc.setFontSize(15);
    doc.text('NOTA DE VENTA', 100, 11);
    doc.text(`Folio: ${this.cupones[id].id_cupon}`, 110, 21);
    //Información del usuario/cliente
    doc.setFontSize(12);
    doc.rect(5, 30, 138, 10);
    doc.text(`Nombre: ${this.cupones[id].nombre_usuario}`, 10, 37);
    doc.rect(5, 40, 69, 10);
    doc.text(`Celular: ${this.cupones[id].celular_user}`, 10, 47);
    doc.rect(74, 40, 69, 10);
    doc.text(`Fecha: ${fecha.toLocaleDateString()}`, 79, 47);
    //Información del producto [Encabezado]
    doc.rect(5, 55, 20, 10);
    doc.text('Cant.', 10, 62);
    doc.rect(25, 55, 88, 10);
    doc.text('Descripción', 30, 62);
    doc.rect(113, 55, 30, 10);
    doc.text('Precio', 117, 62);
    //Información del producto [Detalles]
    doc.rect(5, 65, 20, 10);
    doc.text('1', 10, 72);
    doc.rect(25, 65, 88, 10);
    doc.text(`${this.cupones[id].nombre_premio}`, 26, 72);
    doc.setFontSize(10);
    doc.rect(113, 65, 30, 10);
    doc.text(`${this.cupones[id].costo_premio} puntos`, 116, 72);
    //Información Final
    doc.rect(5, 75, 118, 20);
    doc.text('Firma Cliente', 10, 93);
    doc.text('Firma Vendedor', 90, 93);
    doc.rect(123, 75, 20, 10);
    doc.text('TOTAL', 128, 82);
    doc.rect(123, 85, 20, 10);
    doc.text(`${this.cupones[id].costo_premio}`, 128, 92);
    //Guardar documento
    doc.save(`${fecha.toLocaleDateString()}.pdf`);
  }

  reclamarCupon(id_cupon: number): void{
    var fechaActual = new Date();
    var id: number = this.obtenerIndex(id_cupon);
    this.c_service.deleteCupones(id_cupon, fechaActual).subscribe();
    this.generarPDF(id, fechaActual);
    //document.location.reload();
  }

  obtenerIndex(id: number){
    for (let i = 0; i < this.cupones.length; i++){
      if (this.cupones[i].id_cupon == id){
        return this.cupones.indexOf(this.cupones[i]);
      }
    }
  }
}
