import { Observable } from 'rxjs/Observable';
import { Cliente } from './../shared/Cliente.model';
import { Injectable, OnInit } from '@angular/core';

import 'rxjs/add/operator/map'

import {
    HttpClientModule,
    HttpClient,
    HTTP_INTERCEPTORS,
   } from '@angular/common/http';

@Injectable()
export class ClienteService  {
    
    public url: string = 'http://desafio4devs.forlogic.net/api/evaluations/'

     data: any = null

    constructor(private http: HttpClient){

    } 

    getClientes() {
        
        return this.http
                    .get(this.url)
                    .subscribe((data:any) => {
                    this.data = data;
                    });

      // return this.http.get(this.url)
        //    .map((resposta: any) => resposta.json())
    

    }
}