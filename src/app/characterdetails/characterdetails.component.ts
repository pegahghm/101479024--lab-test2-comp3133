import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HarryPotterService } from '../hpapi.service';
import { CommonModule } from '@angular/common';
import { Character } from '../character';

@Component({
  selector: 'app-character-details',
  imports: [CommonModule],
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  character: Character | null = null; 

  constructor(
    private route: ActivatedRoute,
    private harryPotterService: HarryPotterService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.harryPotterService.getCharacterById(id).subscribe({
        next: (data: Character[]) => { 
          console.log('Character data:', data);
          if (data.length > 0) {
            this.character = {
              ...data[0],
              wizard: data[0].species === 'human' && data[0].hogwartsStudent === true
            };
          } else {
            console.error('No character found with ID:', id);
          }
        },
        error: (err) => {
          console.error('Error fetching character details:', err);
        },
      });
    }
  }
}