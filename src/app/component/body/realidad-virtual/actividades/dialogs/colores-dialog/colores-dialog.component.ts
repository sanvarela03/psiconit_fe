import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfiltradoDialogComponent } from '../infiltrado-dialog/infiltrado-dialog.component';

@Component({
  selector: 'app-colores-dialog',
  templateUrl: './colores-dialog.component.html',
  styleUrls: ['./colores-dialog.component.css']
})
@Injectable()
export class ColoresDialogComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ColoresDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
