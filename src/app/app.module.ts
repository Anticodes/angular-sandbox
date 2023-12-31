import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OdometerInputComponent } from './components/odometer-input/odometer-input.component';
import { OrbitingTextComponent } from './components/orbiting-text/orbiting-text.component';

@NgModule({
  declarations: [
    AppComponent,
    OdometerInputComponent,
    OrbitingTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
