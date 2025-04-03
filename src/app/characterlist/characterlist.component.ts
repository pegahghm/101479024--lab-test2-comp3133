import { Component, OnInit } from '@angular/core';
import { HarryPotterService } from '../hpapi.service';
import { Character } from '../character';
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
  ],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw', 'None'];
  selectedHouse: string = ''; 

  constructor(
    private harryPotterService: HarryPotterService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    if (this.selectedHouse) {
      this.harryPotterService.getCharactersByHouse(this.selectedHouse).subscribe((data) => {
        this.characters = data;
      });
    } else {
      this.harryPotterService.getAllCharacters().subscribe((data) => {
        this.characters = data;
      });
    }
  }

  onHouseChange(house: string): void {
    this.selectedHouse = house;
    this.loadCharacters(); 
  }

  onCharacterClick(id: string): void {
    this.router.navigate([`/character/${id}`]);
  }
}
