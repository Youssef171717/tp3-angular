import { Component, OnInit } from '@angular/core';
import { Ligue } from '../model/ligue.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LigueService } from '../services/ligue.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-ligue',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-ligue.component.html',
  styles: ``
})
export class UpdateLigueComponent implements OnInit {
  currentLigue  = new Ligue();
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private ligueService: LigueService
) { }

  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
this.currentLigue = this.ligueService.consulterLigue(this.activatedRoute.snapshot. params['id']);
   console.log(this.currentLigue);     
  }


  updateLigue()
  { //console.log(this.currentLigue);
    this.ligueService.updateLigue(this.currentLigue);
    this.router.navigate(['ligues']);
  }

}
