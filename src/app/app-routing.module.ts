import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { EventosListComponent } from './components/eventos-list/eventos-list.component';
import { TotalEventosComponent } from './components/total-eventos/total-eventos.component';
import { CalComponent } from './components/cal/cal.component';
import { IniComponent } from './components/inicio/ini.component';
import { RegisPersonaListComponent } from './components/RegisPersona/RegisPersona.component';

const routes: Routes = [
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
    path:'calEventos',
    component:CalComponent
  },
  {
    path:'',
    component:IniComponent
  },
  {
    path:'regisPersona',
    component:RegisPersonaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
