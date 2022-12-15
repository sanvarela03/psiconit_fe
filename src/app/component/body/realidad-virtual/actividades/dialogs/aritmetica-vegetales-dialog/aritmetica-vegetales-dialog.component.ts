import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfiltradoDialogComponent } from '../infiltrado-dialog/infiltrado-dialog.component';

@Component({
  selector: 'app-aritmetica-vegetales-dialog',
  templateUrl: './aritmetica-vegetales-dialog.component.html',
  styleUrls: ['./aritmetica-vegetales-dialog.component.css']
})
@Injectable()
export class AritmeticaVegetalesDialogComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(AritmeticaVegetalesDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
