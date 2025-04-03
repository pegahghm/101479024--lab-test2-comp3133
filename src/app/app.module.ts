// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { CharacterListComponent } from './characterlist/characterlist.component';
import { CharacterDetailsComponent } from './characterdetails/characterdetails.component';
import { CharacterFilterComponent } from './characterfilter/characterfilter.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailsComponent,
    CharacterFilterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'characters', pathMatch: 'full' },
      { path: 'characters', component: CharacterListComponent },
      { path: 'characters/:id', component: CharacterDetailsComponent },
      { path: 'filter', component: CharacterFilterComponent },
    ]),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}