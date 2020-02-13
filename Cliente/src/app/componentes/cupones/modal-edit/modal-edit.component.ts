import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.less']
})
export class ModalEditComponent implements OnInit {

  
  constructor(
    public dialogRef: MatDialogRef<ModalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public mensage: string
  ) { }

  ngOnInit() {
  }

  onClickNo(): void{
    this.dialogRef.close();
  }

}
