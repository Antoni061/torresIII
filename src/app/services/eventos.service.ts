import { Injectable } from '@angular/core';
import { Evento } from '../models/eventos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  URL_API='http://localhost:3000/';
  public evento:Evento={nombreEvento:'',fecha:'',cupoMaximo:0,nomCiudad:'',nomArea:''}

  eventos:Evento[]=[];
  eventosdia:Evento[]=[];

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<Evento[]>(this.URL_API)
  }
  getByDate(fechaEvento:Date){
    return this.http.get<Evento[]>(this.URL_API+'eventos/'+fechaEvento)
  }

  agEvento(evento:Evento){
    return this.http.post(this.URL_API,evento)
  }
}
