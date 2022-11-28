import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { map, filter, scan } from 'rxjs/operators';
import { CharacterApiService } from '../characters/character/shared/character-api.service';
import { CharactersComponent } from '../characters/characters.component';



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent {
  @Input()
  searchTerm : string = ''
  allCharacters : Observable<any> = {} as Observable<any>
  
  constructor(private character: CharacterApiService) { }
      
  ngOnInit() {
    this.getCharacters()
  }

  getCharacters() {
    this.allCharacters = this.character.getAllCharacters();
  }

  search(e : Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value

    this.character = this.allCharacters.filter((characters) => characters.name.tolLowerCase().includes(value))

  }

}
