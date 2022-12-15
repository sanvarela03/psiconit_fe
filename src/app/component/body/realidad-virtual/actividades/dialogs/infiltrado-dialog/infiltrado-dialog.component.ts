import { Component, Injectable, OnInit } from '@angular/core';
import { ActividadesComponent } from '../../actividades.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-infiltrado-dialog',
  templateUrl: './infiltrado-dialog.component.html',
  styleUrls: ['./infiltrado-dialog.component.css']
})
@Injectable()
export class InfiltradoDialogComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(InfiltradoDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
