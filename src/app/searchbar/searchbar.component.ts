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
  search: any
  
  constructor(private character: CharacterApiService) { }
      allCharacters: Observable<any> = {} as Observable<any>
      
      ngOnInit() {
          this.getCharacters();
      }

  getCharacters() {
    this.allCharacters = this.character.getAllCharacters();
  }
  handleSearch () {
     
    }
    allSearch(){
    }
 

}
