import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CongeService } from 'src/Services/conge.service';
import { Conge, TYPE_CONGE, STATUT } from 'src/Types/CongeTypes';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-listconge',
  templateUrl: './listconge.component.html',
  styleUrls: ['./listconge.component.css'],
})
export class ListcongeComponent implements OnInit {
  constructor(private ServiceConge: CongeService,private router: Router) {
  }

  conges: Conge[] = [];

  pieChartData: ChartData<'pie'> = {
    labels: ['Congé Payée', 'Congé Maladie', 'Congé RTT'],
    datasets: [{
      data: [0, 0, 0],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }]
  };
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };

  ngOnInit() {
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
      this.updateChart();
    });
  }

  updateChart() {
    const counts = {
      [TYPE_CONGE.PAYEE]: 0,
      [TYPE_CONGE.MALADIE]: 0,
      [TYPE_CONGE.RTT]: 0
    };

    this.conges.forEach(conge => {
      counts[conge.type_conge]++;
    });

    this.pieChartData.datasets[0].data = [
      counts[TYPE_CONGE.PAYEE],
      counts[TYPE_CONGE.MALADIE],
      counts[TYPE_CONGE.RTT]
    ];
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
