import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    CalendarModule

    
  ],

  bootstrap: [AppComponent],
})
export class AppServerModule {}
