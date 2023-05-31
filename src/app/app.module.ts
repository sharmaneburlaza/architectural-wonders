import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlphabeticalComponent } from './alphabetical/alphabetical.component';
import { ChronologicalComponent } from './chronological/chronological.component';
import { LocationComponent } from './location/location.component';
import { ProgrammaticComponent } from './programmatic/programmatic.component';
import { DetailsComponent } from './details/details.component';
import { StyleComponent } from './style/style.component';
import { PageLayoutComponent } from './shared/page-layout/page-layout.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphabeticalComponent,
    ChronologicalComponent,
    LocationComponent,
    ProgrammaticComponent,
    DetailsComponent,
    StyleComponent,
    PageLayoutComponent,
    SearchComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
