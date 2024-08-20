import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AddcongeComponent } from "./conge/addconge/addconge.component";
import { UpdatecongeComponent } from "./conge/updateconge/updateconge.component";
import { ListcongeComponent } from "./conge/listconge/listconge.component";
import { NavbarComponent } from './navbar/navbar.component';

const ROUTES:Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
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
