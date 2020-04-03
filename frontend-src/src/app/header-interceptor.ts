import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { AuthService } from './auth.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  //constructor(private auth: AuthService) {}
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const newHeaders = req.headers
      .append('Content-Type', 'application/json');
     // .append('Authorization', `Basic ${this.auth.token}`);
    const serverOrigin = 'http://localhost:8080/';
    const serverUrl = serverOrigin + req.url;
    const decoratedReq = req.clone({
        url: serverUrl,
        headers: newHeaders,
    });
    return next.handle(decoratedReq);
  }
}