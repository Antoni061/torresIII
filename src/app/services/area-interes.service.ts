import { Injectable } from '@angular/core';
import { Area } from '../models/areaInteres';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreaInteresService {
  URL_API='http://localhost:3000/area/';
  public area:Area={nomArea:''}

  areaInteres:Area[]=[];

  constructor(private http: HttpClient) { }

  getAreaIn(){
    return this.http.get<Area[]>(this.URL_API)
  }

}
