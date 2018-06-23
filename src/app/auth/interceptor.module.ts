import { Injectable, NgModule } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import {

 HttpEvent,

 HttpInterceptor,

 HttpHandler,

 HttpRequest,
 HttpHeaders,

} from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {

 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

 request = request.clone({
    headers: new HttpHeaders(
      {
        'Content-Type':  'application/json',
        'Authorization': 'desafio-4-devs' 
      }
    )  
  });
  
 return next.handle(request);

 }

}

@NgModule({

providers: [

 {

  provide: HTTP_INTERCEPTORS,

  useClass: HttpsRequestInterceptor,

  multi: true,

 },

],

})

export class Interceptor {}