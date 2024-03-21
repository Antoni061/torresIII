import { CiudadService } from './../../services/ciudad.service';
import { AreaInteresService } from './../../services/area-interes.service';
import { MessageService } from 'primeng/api';
import { FormBuilder, Validators } from '@angular/forms';
import { EventosService } from './../../services/eventos.service';
import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/eventos';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrl: './eventos-list.component.css'
})
export class EventosListComponent implements OnInit {
  eventForm=this.fb.group({
    nombreEvento:['',[Validators.required]],
    cupoMaximo:['',[Validators.required]],
    fecha:['',[Validators.required]],
    nomCiudad:['',[Validators.required]],
    nomArea:['',[Validators.required]]
  }
  )

  constructor(
    private eventosService:EventosService,
    public fb:FormBuilder,
    private messageService:MessageService,
    public areaInteresService:AreaInteresService,
    public ciudadService:CiudadService
  ){}

  ngOnInit(): void {
    this.getCiudad();
    this.getAreaInters()
  }

  get nombreEvento(){
    return this.eventForm.controls['nombreEvento']
  }

  get cupoMaximo(){
    return this.eventForm.controls['cupoMaximo']
  }

  get fecha(){
    return this.eventForm.controls['fecha']
  }

  get nomArea(){
    return this.eventForm.controls['nomArea']
  }

  get nomCiudad(){
    return this.eventForm.controls['nomCiudad']
  }

  getCiudad(){
    this.ciudadService.getCiudad().subscribe(
      (res)=>{
        this.ciudadService.ciudades=res
      },
      (error) => console.error()
    )
  }

  getAreaInters(){
    this.areaInteresService.getAreaIn().subscribe(
      (res)=>{
        this.areaInteresService.areaInteres=res
      },
      (error)=>console.error()
    )
  }

  aggEvento(){
    const datos={...this.eventForm.value}
    console.log(datos)
    this.eventosService.agEvento(datos as unknown as Evento).subscribe(
      (res:any)=>{
        const {message,code}=res
        this.messageService.add({ 
        severity: 'success', 
        summary: 'Registro Exitosos', 
        detail: message });
        this.eventForm.reset();
      },
      (error:any)=>{
        let errorMessage = 'Hubo un error en el registro';
        if (error && error.error && error.error.message) {
          errorMessage = error.error.message;
        }
        this.messageService.add({ 
          severity: 'error', 
          summary: 'Error en el registro', 
          detail: errorMessage
        });
      }
      )
  }

}
