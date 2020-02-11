import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { ModalCrearComponent } from './modal-crear/modal-crear.component';

@Component({
  selector: 'app-cupones',
  templateUrl: './cupones.component.html',
  styleUrls: ['./cupones.component.less']
})
export class CuponesComponent implements OnInit {

  constructor( public dialog: MatDialog ) { }

  ngOnInit() {
  }

  ejemplos= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  openDialog():void{
    const dialogRef =  this.dialog.open( ModalCrearComponent, {
      height: '650px',
      width: '600px',
    } )
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    })
  }
 
   
}