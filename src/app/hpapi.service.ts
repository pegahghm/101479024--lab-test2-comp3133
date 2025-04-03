
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root',
})
export class HarryPotterService {
  private apiUrl = 'https://hp-api.onrender.com/api';

  constructor(private http: HttpClient) {}

  getCharacterById(id: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}/character/${id}`);
  }


  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}/characters`);
  }


  getCharactersByHouse(house: string): Observable<Character[]> {
    console.log(`Fetching characters for house: ${house}`);
    return this.http.get<Character[]>(`${this.apiUrl}/characters/house/${house}`);
  }
}