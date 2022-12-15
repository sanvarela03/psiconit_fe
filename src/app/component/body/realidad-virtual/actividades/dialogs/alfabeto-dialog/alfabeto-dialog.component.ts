import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColoresDialogComponent } from '../colores-dialog/colores-dialog.component';

@Component({
  selector: 'app-alfabeto-dialog',
  templateUrl: './alfabeto-dialog.component.html',
  styleUrls: ['./alfabeto-dialog.component.css']
})
@Injectable()
export class AlfabetoDialogComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(AlfabetoDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
