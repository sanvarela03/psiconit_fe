import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from './data.service';
import { SessionStorageService } from './session-storage.service';
import { IRefresh } from '../../models/irefresh';
import { IAccess } from '../../models/iaccess';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  IsAuthorized: any;
  private authSource = new Subject<boolean>();
  authChallenge$ = this.authSource.asObservable();
  URL_REFRESH = "http://localhost:8000/api/auth/refresh/";

  constructor(
    private sessionStorageService: SessionStorageService,
    private dataService: DataService
  ) {
    if (this.sessionStorageService.retrieve('IsAuthorized') !== '') {
      this.IsAuthorized = this.sessionStorageService.retrieve('IsAuthorized');
      this.authSource.next(this.IsAuthorized);
    }
  }

  public getAccessToken(): any {
    
    return this.sessionStorageService.retrieve('access_token_key');
  }

  public setAccessToken(token: any) {
    this.sessionStorageService.store('access_token_key', token);
    this.IsAuthorized = true;
    this.sessionStorageService.store('IsAuthorized', true);

    this.authSource.next(true)
  }

  public setRefreshToken(refresh_token: any) {
    this.sessionStorageService.store('refresh_token_key', refresh_token);
  }

  public getRefreshToken() : string {
    return this.sessionStorageService.retrieve('refresh_token_key')
  }

  public setUserId(user_id: number) {
    this.sessionStorageService.store('user_id', user_id);
  }

  public getUserId() {
    return this.sessionStorageService.retrieve('user_id');
  }


  public logOff() {
    this.resetAuthData();
    this.authSource.next(false)
  }

  public verifyToken() {
    
    let iRefresh: IRefresh = {
      refresh: this.getRefreshToken()
    };

    return this.dataService.post<IAccess>(this.URL_REFRESH, iRefresh)
  }

  public resetAuthData() {
    this.sessionStorageService.store('access_token_key', '');
    this.sessionStorageService.store('refresh_token_key', '');
    this.sessionStorageService.store('user_id', -1);
    this.IsAuthorized = false;
    this.sessionStorageService.store('IsAuthorized', false);
  }
}
