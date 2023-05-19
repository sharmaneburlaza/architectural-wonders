import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlphabeticalComponent } from './alphabetical/alphabetical.component';
import { ChronologicalComponent } from './chronological/chronological.component';
import { DetailsComponent } from './details/details.component';
import { LocationComponent } from './location/location.component';
import { ProgrammaticComponent } from './programmatic/programmatic.component';
import { StyleComponent } from './style/style.component';

const routes: Routes = [
  { path: 'alphabetical', component: AlphabeticalComponent },
  { path: 'chronological', component: ChronologicalComponent },
  { path: 'location', component: LocationComponent },
  { path: 'programmatic', component: ProgrammaticComponent },
  { path: 'style', component: StyleComponent },
  { path: 'detail/:id', component: DetailsComponent },
  { path: '', redirectTo: 'style', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
