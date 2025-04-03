import { Component, OnInit } from '@angular/core';
import { HarryPotterService } from '../hpapi.service';
import { Character } from '../character';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-character-filter',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
  ],
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.css'],
})
export class CharacterFilterComponent implements OnInit {
  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw', 'None'];
  selectedHouse: string | null = null;
  filteredCharacters: Character[] = [];

  constructor(private harryPotterService: HarryPotterService) {}

  ngOnInit(): void {
    this.filterByHouse('');
  }

  filterByHouse(house: string): void {
    this.selectedHouse = house;
    if (house) {
      this.harryPotterService.getCharactersByHouse(house).subscribe((data) => {
        this.filteredCharacters = data;
      });
    } else {
      this.harryPotterService.getAllCharacters().subscribe((data) => {
        this.filteredCharacters = data;
      });
    }
  }
}