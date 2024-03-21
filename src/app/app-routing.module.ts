import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { EventosListComponent } from './components/eventos-list/eventos-list.component';
import { TotalEventosComponent } from './components/total-eventos/total-eventos.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { IniComponent } from './components/inicio/ini.component';
import { RegisPersonaComponent } from './components/RegisPersona/RegisPersona.component';

const routes: Routes = [
  {
    path:'',
    component:IniComponent
  },
  {
    path:'participantes',
    component:ParticipantesComponent
    
  },
  {
    path:'listEventos',
    component:EventosListComponent
    
  },
  {
    path:'totalEventos',
    component:TotalEventosComponent
    
  },
  {
    path:'participantes/:nombreEvento',
    component:ParticipantesComponent
  },
  {
    path:'calendario',
    component:CalendarioComponent
  },
  {
    path:'home',
    component:IniComponent
  },
  {
    path:'regisPersona',
    component:RegisPersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
