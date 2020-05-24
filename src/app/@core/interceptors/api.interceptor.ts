import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const PARAMS_WITH_API_KEY = new HttpParams().append('api_key', environment.API_KEY);
        const API_REQUEST = request.clone({ url: `${environment.API_URL}/${request.url}`, params: PARAMS_WITH_API_KEY });

        return next.handle(API_REQUEST);
    }
}
