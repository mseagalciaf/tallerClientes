import { Component, OnInit } from '@angular/core';
import { ClienteInterface } from 'src/app/interfaces/cliente-interface';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  clientes:ClienteInterface;

  constructor(
    private clienteService : ClienteService
  ) {
    this.getClientes();
   }

  ngOnInit(): void {
  }

  getClientes(){
    this.clienteService.getAllClientes().subscribe(
      resp => {
        this.clientes=resp;
        console.log(this.clientes);
                
      }
    )
  }

}
