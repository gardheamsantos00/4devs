import { ClienteService } from './../service/ClienteService';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Cliente } from '../model/cliente.model';


@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})

export class FormUsuarioComponent implements OnInit {

  public form : FormGroup= new FormGroup({
    'nome' : new FormControl(null),
    'sobrenome': new FormControl(null),
    'date': new FormControl(null),
    }
  )
  
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }

  public cadastrarCliente(): void{
    console.log(this.form)
    let cliente : Cliente = new Cliente(
        this.form.value.nome,
        this.form.value.sobrenome,
        this.form.value.date 
    )
    this.clienteService.postCliente(cliente)
 
  }

}
