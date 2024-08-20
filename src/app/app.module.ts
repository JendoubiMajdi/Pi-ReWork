import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddcongeComponent } from 'src/conge/addconge/addconge.component';
import { FormsModule } from '@angular/forms';
import { UpdatecongeComponent } from 'src/conge/updateconge/updateconge.component';
import { ListcongeComponent } from 'src/conge/listconge/listconge.component';
import { AppRoutingModule } from 'src/app.routing.module';
import { NavbarComponent } from 'src/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcongeComponent,
    UpdatecongeComponent,
    ListcongeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
