import { Cliente } from './../shared/Cliente.model';
import { ClienteService } from './../service/ClienteService';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ ClienteService ]
})
export class HomeComponent implements OnInit {

public cliente : any

  constructor( private clientesService: ClienteService) { }

  ngOnInit() {
  
    this.cliente =  this.clientesService.getClientes()
    
    
  }

  

}
