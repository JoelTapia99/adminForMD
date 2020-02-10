import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-r',
  templateUrl: './modal-r.component.html',
  styleUrls: ['./modal-r.component.less']
})
export class ModalRComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalRComponent>,
    @Inject(MAT_DIALOG_DATA) public mensage: string
  ) { }

  ngOnInit() {
  }

  onClickNo(): void{
    this.dialogRef.close();
  }

}
