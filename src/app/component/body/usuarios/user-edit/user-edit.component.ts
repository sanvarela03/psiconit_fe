import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../../../models/iuser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
  private subParams: Subscription = new Subscription;
  usuario: IUser = {
    username: '',
    password: '',
    name: '',
    email: '',
    accounts: [],
  }
  constructor(
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.subParams = this.route.params.subscribe(
      params => {
        this.usuario.username= params['username'];
        console.log('Editar el usuario con id', this.usuario.username)
      }
    )
  }



  ngOnDestroy(): void {
    if(this.subParams){
      this.subParams.unsubscribe();
    }
  }
}
