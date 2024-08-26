import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AddcongeComponent } from "./conge/addconge/addconge.component";
import { UpdatecongeComponent } from "./conge/updateconge/updateconge.component";
import { ListcongeComponent } from "./conge/listconge/listconge.component";
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';

const ROUTES:Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    { path: 'addconge', component: AddcongeComponent },
    { path: 'updateconge/:id', component: UpdatecongeComponent },
    { path: 'listconge', component: ListcongeComponent }

]

@NgModule({
    declarations: [
  ],
    imports: [
        CommonModule,
        RouterModule.forRoot(ROUTES),
    ],
    exports:[RouterModule]
})

export class AppRoutingModule {}
