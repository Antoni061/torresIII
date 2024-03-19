import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { EventosListComponent } from './components/eventos-list/eventos-list.component';
import { TotalEventosComponent } from './components/total-eventos/total-eventos.component';

const routes: Routes = [
  {
    path:'',
    component:ParticipantesComponent
    
  },
  {
    path:'listEventos',
    component:EventosListComponent
    
  },
  {
    path:'totalEventos',
    component:TotalEventosComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
