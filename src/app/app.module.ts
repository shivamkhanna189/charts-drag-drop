import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { DragulaModule, DragulaService } from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    DragulaModule.forRoot()
  
  ],
  providers: [DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
