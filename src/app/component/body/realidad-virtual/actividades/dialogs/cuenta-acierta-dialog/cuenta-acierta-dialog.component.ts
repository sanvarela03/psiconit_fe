import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfiltradoDialogComponent } from '../infiltrado-dialog/infiltrado-dialog.component';

@Component({
  selector: 'app-cuenta-acierta-dialog',
  templateUrl: './cuenta-acierta-dialog.component.html',
  styleUrls: ['./cuenta-acierta-dialog.component.css']
})

@Injectable()
export class CuentaAciertaDialogComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(CuentaAciertaDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
