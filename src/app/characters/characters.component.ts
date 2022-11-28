import { CharacterApiService } from './character/shared/character-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  title = 'FieldMarvel'

  constructor(private character: CharacterApiService) { }
  allCharacters!: Observable<any>;
  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters = this.character.getAllCharacters();
  }
}
