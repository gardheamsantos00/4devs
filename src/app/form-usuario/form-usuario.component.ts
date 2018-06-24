import { ClienteService } from './../service/ClienteService';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Cliente } from '../model/cliente.model';


@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})

export class FormUsuarioComponent implements OnInit {

  public form : FormGroup= new FormGroup({
    'nome' : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    'nomeContato': new FormControl(null, [Validators.required ,Validators.minLength(3), Validators.maxLength(30) ]),
    'date': new FormControl(null,[Validators.required]),
    }
  )
  
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }

  public cadastrarCliente(): void{
    console.log(this.form)
    let cliente : Cliente = new Cliente(
        this.form.value.nome,
        this.form.value.nomeContato,
        this.form.value.date 
    )
    this.clienteService.postCliente(cliente)
 
  }

}
