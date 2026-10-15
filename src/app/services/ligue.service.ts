import { Injectable } from '@angular/core';
import { Ligue } from '../model/ligue.model';

@Injectable({
  providedIn: 'root'
})
export class LigueService {
  ligues : Ligue[]; // un tableau de Ligue

  ligue! : Ligue;

  constructor() {
    this.ligues = [
      { idLigue : 1, nomLigue : "Premier League", pays : "Angleterre", nbClubs : 20, dateCreation : new Date("1992-02-20") },
      { idLigue : 2, nomLigue : "La Liga",        pays : "Espagne",    nbClubs : 20, dateCreation : new Date("1929-02-10") },
      { idLigue : 3, nomLigue : "Serie A",        pays : "Italie",     nbClubs : 20, dateCreation : new Date("1898-05-08") },
      { idLigue : 4, nomLigue : "Bundesliga",     pays : "Allemagne",  nbClubs : 18, dateCreation : new Date("1963-08-24") },
      { idLigue : 5, nomLigue : "Ligue 1",        pays : "France",     nbClubs : 18, dateCreation : new Date("1932-09-11") }
    ];
  }

  listeLigues() : Ligue[] {
    return this.ligues;
  }

  ajouterLigue(l: Ligue) {
    this.ligues.push(l);
  }

  supprimerLigue(l: Ligue) {
    const index = this.ligues.indexOf(l, 0);
    if (index > -1) {
      this.ligues.splice(index, 1);
    }
  }

  consulterLigue(id: number) : Ligue {
    this.ligue = this.ligues.find(l => l.idLigue == id)!;
    return this.ligue;
  }

  trierLigues() {
    this.ligues = this.ligues.sort((n1, n2) => {
      if (n1.idLigue! > n2.idLigue!) { return 1; }
      if (n1.idLigue! < n2.idLigue!) { return -1; }
      return 0;
    });
  }

  updateLigue(l: Ligue) {
    this.supprimerLigue(l);
    this.ajouterLigue(l);
    this.trierLigues();
  }
}
