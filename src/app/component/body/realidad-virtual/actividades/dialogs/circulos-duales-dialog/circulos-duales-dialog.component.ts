import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlfabetoDialogComponent } from '../alfabeto-dialog/alfabeto-dialog.component';

@Component({
  selector: 'app-circulos-duales-dialog',
  templateUrl: './circulos-duales-dialog.component.html',
  styleUrls: ['./circulos-duales-dialog.component.css']
})
@Injectable()
export class CirculosDualesDialogComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(CirculosDualesDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
