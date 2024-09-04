import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from 'src/Services/AuthService';
import { CongeService } from 'src/Services/conge.service';
import { Conge, TYPE_CONGE, STATUT } from 'src/Types/CongeTypes';

@Component({
  selector: 'app-listconge',
  templateUrl: './listconge.component.html',
  styleUrls: ['./listconge.component.css'],
})
export class ListcongeComponent implements OnInit {
  constructor(private ServiceConge: CongeService,private router: Router, private authService: AuthService) {
  }

  conges: Conge[] = [];

  ngOnInit() {
    /*const token = localStorage.getItem('token');
    let user_id='';

    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        user_id = decodedToken.id;
      } catch (error) {
        console.error('Failed to decode token', error);
      }
    }*/
    this.ServiceConge.findAll().subscribe(data => {
      let newtab:Conge[] = []
      data.forEach(cong => {
        cong.id = cong._id
        cong.statut = STATUT[cong.statut as keyof typeof STATUT];
        cong.type_conge = TYPE_CONGE[cong.type_conge as keyof typeof TYPE_CONGE];
        newtab.push(cong)
      });
      //@ts-ignore
      this.conges = newtab
    });
  }

  formatDateToDayMonth(dateString:Date) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });

    return `${day} ${month}`;
  }
  calculateRemainingDays(dateDebut:Date, dateFin:Date) {
    const debut = new Date(dateDebut);
    const fin = new Date(dateFin);

    // Calculer la différence en millisecondes
    const differenceEnTemps = fin.getTime() - debut.getTime();

    // Convertir la différence en jours
    const joursRestants = Math.ceil(differenceEnTemps / (1000 * 3600 * 24));

    return joursRestants;
  }

  deleteConge(indexConge: number) {
    let conge = this.conges.at(indexConge);
    console.log(conge)
    // @ts-ignore
    this.ServiceConge.delete(conge._id).subscribe(
      () => {
        this.conges= this.conges.filter((conge)=>{
          return conge.id !== conge.id })
      }
    );
  }


}
