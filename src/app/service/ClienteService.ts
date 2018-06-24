import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map'

import {
    HttpClient,
   } from '@angular/common/http';
import { Cliente } from '../model/cliente.model';

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
    }

    postCliente(cliente: Cliente){
        this.http.post(this.url, cliente)
                    .subscribe((data: any) => {
                        this.data = data;
                        console.log(data)
                    });
    }

    deleteCliente(id: number){
        this.http.delete(`this.url${id}`)
                    .subscribe((data:any) => {
                        this.data = data 
                    });
    }
}