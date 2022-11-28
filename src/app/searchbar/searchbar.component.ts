import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { CharacterApiService } from '../characters/character/shared/character-api.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  @Input()
  search: any;
  allCharacters : Observable<any> = {} as Observable<any>

  constructor(private character: CharacterApiService) { }
      
  ngOnInit() {
    this.getCharacters()
  }

  getCharacters() {
    this.allCharacters = this.character.getAllCharacters();
  }

  handleSearch() {
  }

  allSearch() {
  } 
}