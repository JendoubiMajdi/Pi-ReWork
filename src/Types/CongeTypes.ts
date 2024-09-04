export enum TYPE_CONGE {
  PAYEE = 'PAYEE',
  MALADIE = 'MALADIE',
  RTT = 'RTT'
}
export enum STATUT {
  EN_ATTENTE = 'EN_ATTENTE',
  VALIDE = 'VALIDE',
  REFUSE = 'REFUSE'
}
export class Conge {
    id!: string;
    date_debut!: Date;
    date_fin!: Date;
    jours_restants!: number;
    statut: STATUT = STATUT.EN_ATTENTE
    type_conge!:TYPE_CONGE;
    user_id!:string;
  }
