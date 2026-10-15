import { Routes } from '@angular/router';
import { LiguesComponent } from './ligues/ligues.component';
import { AddLigueComponent } from './add-ligue/add-ligue.component';
import { UpdateLigueComponent } from './update-ligue/update-ligue.component';

export const routes: Routes = [
    {path: "ligues", component : LiguesComponent},
    {path: "add-ligue", component : AddLigueComponent},
    {path: "updateLigue/:id",  component: UpdateLigueComponent},
    {path: "", redirectTo: "ligues", pathMatch: "full"}
];
