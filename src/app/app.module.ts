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

@NgModule({
  declarations: [
    AppComponent,
    ParticipantesComponent,
    NavBarComponent,
    EventosListComponent,
    TotalEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
