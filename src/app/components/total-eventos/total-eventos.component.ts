import { Evento } from './../../models/eventos';
import { ParticipantesService } from './../../services/participantes.service';
import { EventosService } from './../../services/eventos.service';
import { Component, OnInit } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Participante } from '../../models/participante';
import { response } from 'express';
import { error } from 'console';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total-eventos',
  templateUrl: './total-eventos.component.html',
  styleUrl: './total-eventos.component.css'
})
export class TotalEventosComponent implements OnInit{
  
  items: MenuItem[] = [];

  registerForm=this.fb.group({
    nombre:['',[Validators.required]],
    apP:['',[Validators.required]],
    apM:['',[Validators.required]],
  }
  )

  visible: boolean = false;

  constructor(
    private fb:FormBuilder, 
    public eventosService:EventosService,
    private messageService:MessageService,
    public participantesService:ParticipantesService,
    private router:Router
    ){}

  ngOnInit(){
    this.getEvents();
  }

  get nombre(){
    return this.registerForm.controls['nombre']
  }

  get apP(){
    return this.registerForm.controls['apP']
  }

  get apM(){
    return this.registerForm.controls['apM']
  }

  getEvents(){
    this.eventosService.getEvents().subscribe(
      (res) => {
        this.eventosService.eventos = res;
        console.log(res);
      },
      (error) => console.error()
    );
  }

  evento:string='';
  errorMessage: string='';

  insPart(){
    const datos={...this.registerForm.value}

    this.participantesService.agPart(datos as Participante,this.evento).subscribe(
      (response:any)=>{
        const {message,code}=response
        this.messageService.add({ 
          severity: 'success', 
          summary: 'Registro Exitosos', 
          detail: message });
      },
      (error: any) => {
        let errorMessage = 'Hubo un error en el registro';
        if (error && error.error && error.error.message) {
          errorMessage = error.error.message;
        }
        this.messageService.add({ 
          severity: 'error', 
          summary: 'Error en el registro', 
          detail: errorMessage
        });
      })
  }

  goToPart(nombreEvento:string){
    this.router.navigate(['/participantes', nombreEvento]);
  }

  showDialog(eventoN:string) {
    this.evento=eventoN;
    this.visible = true;
    console.log(this.evento)
  }

}
