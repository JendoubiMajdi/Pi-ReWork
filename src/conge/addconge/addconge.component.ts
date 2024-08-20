import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CongeService } from 'src/Services/conge.service';
import { Conge, STATUT, TYPE_CONGE } from 'src/Types/CongeTypes';

@Component({
  selector: 'app-addconge',
  templateUrl: './addconge.component.html',
  styleUrls: ['./addconge.component.css']
})
export class AddcongeComponent {

  constructor(private ServiceConge: CongeService, private router: Router) {
  }
newConge = TYPE_CONGE;

//@ts-ignore
NewConge: Conge ={
  date_debut: new Date(),
  date_fin: new Date(),
  statut: STATUT.EN_ATTENTE,
  type_conge:TYPE_CONGE.MALADIE
}


addConge(){

  this.ServiceConge.addConge(this.NewConge).subscribe(
  () => {
    this.router.navigateByUrl('/listconge');
  },
  () => {
    console.log('failed')
  }
);

}


}
