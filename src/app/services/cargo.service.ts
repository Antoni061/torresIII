import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  URL='http://localhost:3000/cargo';

  constructor(private http: HttpClient) { }

  cargo:Cargo={nomCargo:''}
  cargos:Cargo[]=[]

  getCargo(){
    return this.http.get<Cargo[]>(this.URL)
  }
}
