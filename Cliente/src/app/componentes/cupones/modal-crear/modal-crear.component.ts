import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-crear',
  templateUrl: './modal-crear.component.html',
  styleUrls: ['./modal-crear.component.less']
})
export class ModalCrearComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalCrearComponent>,
    @Inject(MAT_DIALOG_DATA) public mensage: string
  ) { }

  ngOnInit() {
  }

  onClickNo(): void{
    this.dialogRef.close();
  }

}
