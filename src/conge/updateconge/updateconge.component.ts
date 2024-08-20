import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CongeService } from 'src/Services/conge.service';
import { Conge, STATUT, TYPE_CONGE } from 'src/Types/CongeTypes';

@Component({
  selector: 'app-updateconge',
  templateUrl: './updateconge.component.html',
  styleUrls: ['./updateconge.component.css']
})
export class UpdatecongeComponent implements OnInit {


constructor(private activatedroute: ActivatedRoute,private ServiceConge: CongeService, private router: Router) {}

//@ts-ignore
NewConge: Conge ={
  date_debut: new Date(),
  date_fin: new Date(),
  statut: STATUT.EN_ATTENTE,
  type_conge:TYPE_CONGE.MALADIE
}
formatDateToYYYYMMDD(dateString: Date): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

ngOnInit() {
  this.activatedroute.params.subscribe((params) => {
    let id: string = params['id']
    console.log(id)
    this.ServiceConge.findById(id)
      .subscribe((data:Conge) => {
        this.NewConge = data
        //@ts-ignore
        this.NewConge.id = id
                //@ts-ignore

        this.NewConge.date_debut = this.formatDateToYYYYMMDD(this.NewConge.date_debut)
                //@ts-ignore

        this.NewConge.date_fin = this.formatDateToYYYYMMDD(this.NewConge.date_fin)
      }, (error:any) => {
        console.error('Error fetching Universite:', error);
      });
  })


}

newConge = TYPE_CONGE;





updateConge(){
  console.log(this.NewConge)
  //@ts-ignore
  this.ServiceConge.updateConge(this.NewConge.id,this.NewConge).subscribe(
    () => {
      this.router.navigateByUrl('/listconge');
    },
    () => {
      console.log('Failed to modify conge');
    }
  );
}

}
