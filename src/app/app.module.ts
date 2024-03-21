import { NgModule } from '@angular/core';
import { BrowserModule,provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng.module';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EventosListComponent } from './components/eventos-list/eventos-list.component';
import { TotalEventosComponent } from './components/total-eventos/total-eventos.component';
import { FechaEspPipe } from './pipes/fecha-esp.pipe';
import { FormsModule } from '@angular/forms';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { RegisPersonaComponent } from './components/RegisPersona/RegisPersona.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantesComponent,
    NavBarComponent,
    EventosListComponent,
    TotalEventosComponent,
    FechaEspPipe,
    CalendarioComponent,
    RegisPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MessageService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
