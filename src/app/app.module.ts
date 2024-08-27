import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddcongeComponent } from 'src/conge/addconge/addconge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatecongeComponent } from 'src/conge/updateconge/updateconge.component';
import { ListcongeComponent } from 'src/conge/listconge/listconge.component';
import { AppRoutingModule } from 'src/app.routing.module';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from 'src/Auth/login/login.component';
import { SignupComponent } from 'src/Auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcongeComponent,
    UpdatecongeComponent,
    ListcongeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
