import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CapitalizadoPipe } from "./pipes/capitalizado.pipe";
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule ( {
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers   : [
    {
      provide : LOCALE_ID,
      useValue: "esCOL"
    } ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
