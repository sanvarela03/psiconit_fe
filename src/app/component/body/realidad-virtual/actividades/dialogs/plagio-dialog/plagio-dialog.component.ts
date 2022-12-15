import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfiltradoDialogComponent } from '../infiltrado-dialog/infiltrado-dialog.component';

@Component({
  selector: 'app-plagio-dialog',
  templateUrl: './plagio-dialog.component.html',
  styleUrls: ['./plagio-dialog.component.css']
})
@Injectable()
export class PlagioDialogComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(PlagioDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
