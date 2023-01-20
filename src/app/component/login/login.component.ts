import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ILogin } from 'src/app/models/ilogin';
import { IResponse } from 'src/app/models/iresponse';
import { DataService } from 'src/app/services/ssd/data.service';
import { SecurityService } from 'src/app/services/ssd/security.service';
import jwt_decode from 'jwt-decode';
import { authInterceptorProviders } from '../../helpers/auth.interceptor';
import { IJWT } from '../../models/ijwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  formLogin: FormGroup;
  subRef$: Subscription = new Subscription;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private securityService: SecurityService
  ) {
    this.formLogin = formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    const usuarioLogin: ILogin = {
      username: this.formLogin.value.usuario,
      password: this.formLogin.value.password
    };

    console.log("EL USUARIO: "+usuarioLogin.username) 
    console.log("LA CONTRASEÑA: "+usuarioLogin.password) 
    const url = 'http://localhost:8000/api/auth/signin/'
    this.subRef$ = this.dataService.post<IResponse>(url, usuarioLogin).subscribe(
      res => {
        const acces_token = res.body?.access as string;
        const refresh_token = res.body?.refresh;
                 
        const user_id = jwt_decode<IJWT>(acces_token).user_id;


        console.log('#2 res:', res);
        console.log('#3 body_access:', res.body?.access);
        console.log('#3 body_refresh:', res.body?.refresh);
        console.log('#3 type_body:', typeof(res.body));
        console.log('#3 TIPO:', typeof(res.body));
        this.securityService.setRefreshToken(refresh_token);
        this.securityService.setAccessToken(acces_token);
        this.securityService.setUserId(user_id);
        this.router.navigate(['/listar-usuarios']);
      },
      err => {
        console.log('Error en el login', err);
      }
    );
  }
  ngOnDestroy() {
    if (this.subRef$) {
      this.subRef$.unsubscribe();
    }
  }
}
