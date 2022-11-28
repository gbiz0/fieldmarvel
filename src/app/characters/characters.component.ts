import { CharacterApiService } from './character/shared/character-api.service';
import { Component, OnInit } from '@angular/core';
import { Character } from './character/character.component'



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {
  title = 'FieldMarvel'
  characters: any[100]

  constructor(private character: CharacterApiService) {}

  ngOnInit() {
    this.character.getAllCharacters().subscribe(
      characters => this.characters = characters
    );
    console.log(this.characters)
  }
}