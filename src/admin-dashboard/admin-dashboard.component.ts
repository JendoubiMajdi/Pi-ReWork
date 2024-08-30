import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ChartData, ChartOptions } from 'chart.js';
import { CongeService } from 'src/Services/conge.service';
import { SmsService } from 'src/Services/sms.service';
import { Conge, STATUT, TYPE_CONGE } from 'src/Types/CongeTypes';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

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

  constructor(private congeService: CongeService, private smsService:SmsService){}

  ngOnInit(): void {
    this.congeService.findAll().subscribe(data => {

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

  loadLeaves() {
    this.congeService.findAll().subscribe((data: any[]) => {
      this.conges = data;
    });
  }

  acceptLeave(id: string) {
    this.congeService.updateLeaveStatus(id, 'VALIDE').subscribe(() => {
      this.loadLeaves(); // Refresh the list
      this.smsService.sendSms('+21627839399', 'Your leave request has been approved!')
        .subscribe(
          response => console.log('SMS sent successfully', response),
          error => console.error('Failed to send SMS', error)
        );
    });
  }

  refuseLeave(id: string) {
    this.congeService.updateLeaveStatus(id, 'REFUSE').subscribe(() => {
      this.loadLeaves(); // Refresh the list
      this.smsService.sendSms('+21627839399', 'We are sorry, but your leave request has been rejected.')
        .subscribe(
          response => console.log('SMS sent successfully', response),
          error => console.error('Failed to send SMS', error)
        );
    });
  }

  printPage() {
    window.print();
  }



}
