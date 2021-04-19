import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsPageComponent } from './componets/buttons-page/buttons-page.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGidePageComponent } from './componets/ag-gide-page/ag-gide-page.component';
import { HomePageComponent } from './componets/home-page/home-page.component';
import { PageNotFoundComponent } from './componets/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonsPageComponent,
    AgGidePageComponent,
    HomePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
