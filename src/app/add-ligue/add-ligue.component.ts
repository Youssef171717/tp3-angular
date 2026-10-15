import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ligue } from '../model/ligue.model';
import { LigueService } from '../services/ligue.service';

@Component({
  selector: 'app-add-ligue',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-ligue.component.html',
  styleUrl: './add-ligue.component.css'
})
export class AddLigueComponent {

  newLigue = new Ligue();

  message! : string;

  constructor(private ligueService: LigueService ) {}

  addLigue(){
   // console.log(this.newLigue);
   this.ligueService.ajouterLigue(this.newLigue);
   this.message = "Ligue "+this.newLigue.nomLigue +" ajoutée avec succès !"
  }


}
