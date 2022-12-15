import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfiltradoDialogComponent } from '../infiltrado-dialog/infiltrado-dialog.component';

@Component({
  selector: 'app-cuadro-mnesico-dialog',
  templateUrl: './cuadro-mnesico-dialog.component.html',
  styleUrls: ['./cuadro-mnesico-dialog.component.css']
})
@Injectable()
export class CuadroMnesicoDialogComponent  {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(CuadroMnesicoDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
