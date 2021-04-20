import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteInterface } from '../interfaces/cliente-interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http : HttpClient
  ) { }

  getAllClientes(){
    let url:string = "https://fast-caverns-63520.herokuapp.com/api/user";
    return this.http.get<ClienteInterface>(url);
  }
}
