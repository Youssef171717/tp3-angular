import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Ligue } from '../model/ligue.model';
import { LigueService } from '../services/ligue.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ligues',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ligues.component.html',
  styleUrl: './ligues.component.css'
})
export class LiguesComponent implements OnInit {
  ligues! : Ligue[]; // un tableau de Ligue

  constructor(private ligueService: LigueService) {
    this.ligues = ligueService.listeLigues();
  }

  ngOnInit() {}

  supprimerLigue(l: Ligue) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.ligueService.supprimerLigue(l);
  }
}
