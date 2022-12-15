import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reloj-dialog',
  templateUrl: './reloj-dialog.component.html',
  styleUrls: ['./reloj-dialog.component.css']
})
@Injectable()
export class RelojDialogComponent  {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(RelojDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
