import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SecurityService } from '../services/ssd/security.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private securityService : SecurityService
    ){}

    canActivate(){
        this.securityService.verifyToken();
        if(this.securityService.IsAuthorized){
            return true;
        }
        
        this.router.navigate(['/login']);

        return false;
    }
}
