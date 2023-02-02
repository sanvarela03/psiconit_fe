import { HTTP_INTERCEPTORS, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../services/token-storage.service';

import { SecurityService } from '../services/ssd/security.service';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';


const TOKEN_HEADER_KEY = 'Authorization';       // for Spring Boot back-end

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);


    constructor(private securityService: SecurityService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const access_token = this.securityService.getAccessToken();
        if (access_token) {
            alert('(http_interceptor) + Access token: ' + access_token);
            req = this.addTokenHeader(req, access_token);
        }
        return next.handle(req).pipe(
            catchError(error => {
                if (
                    error instanceof HttpErrorResponse &&
                    !req.url.includes("api/auth/signin/") &&
                    error.status === 401
                ) {
                    return this.handle401Error(req, next);
                }


                return throwError(() => error);

            }));
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);

            const token = this.securityService.getRefreshToken();

            if (token) {
                return this.securityService.verifyToken().pipe(
                    switchMap((token: any) => {
                        this.isRefreshing = false;


                        this.securityService.setAccessToken(token.access);
                        this.refreshTokenSubject.next(token.access);


                        return next.handle(this.addTokenHeader(request, token.access));
                    }),
                    catchError((err) => {
                        this.isRefreshing = false;

                        this.securityService.logOff();
                        return throwError(() => err);
                    })
                );
            }
        }

        return this.refreshTokenSubject.pipe(
            filter(token => token !== null),
            take(1),
            switchMap((token) => next.handle(this.addTokenHeader(request, token)))
        );

    }

    private addTokenHeader(req: HttpRequest<any>, access_token: string) {
        return req.clone({
            setHeaders: {
                Authorization: `Bearer ${access_token}`
            }
        });
    }
}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];