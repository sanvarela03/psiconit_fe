import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IUser } from 'src/app/models/iuser';
import { DataService } from 'src/app/services/ssd/data.service';
import { SecurityService } from 'src/app/services/ssd/security.service';
import { Subscription } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlCro } from 'src/app/models/mat-paginator-intl-cro';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro }]
})
export class UsuariosComponent implements OnInit, OnDestroy {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | null = null;
  @ViewChild(MatSort, { static: true }) sort: MatSort | null = null;

  users = new MatTableDataSource();

  subRef$: Subscription = new Subscription();
  displayedColumns: string[] = [
    'id',
    'username',
    'name',
    'email',
    'account',
    'actions'
  ];
  constructor(
    private dataService: DataService,
    private securityService: SecurityService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    
   

    const token = this.securityService.getAccessToken();
    console.log("El token es -> : " + token);

    const url = "http://localhost:8000/api/users/"

    this.subRef$ = this.dataService.get<IUser[]>(url).subscribe(
      res => {
        this.users.data = res.body!;

        console.log("DATOS USUARIOS: ", this.users.data);
        this.users.paginator = this.paginator
        this.users.sort = this.sort;
      }
    )
  }

  ngOnDestroy(): void {
    if (this.subRef$) {
      this.subRef$.unsubscribe();
    }
  }

  // Metodos CRUD
  agregar() {
    this.router.navigate(['/add-usuario'])
    // TODO Auto-generated method stub
  }
  editar(e: any) {
    console.log('Fila editar:', e);
    this.router.navigate(['/edit-usuario', e.username])
  }

  borrar(e: any) {
    console.log('borrar', e);
  }
}
