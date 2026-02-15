import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CharactersApiService } from '../../data-access/characters-api.service';
import { map, Observable, tap } from 'rxjs';
import { CharacterCard } from '../character-card/character-card';
import { CharacterCardModel } from '../../../../components/charcter.model';

@Component({
  selector: 'app-character-list',
  imports: [AsyncPipe, CharacterCard],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList {
  characters$?: Observable<CharacterCardModel[]>;
  constructor(private charactersService: CharactersApiService) { }

  ngOnInit(): void {
    this.characters$ = this.charactersService.loadCharacters(1, 25).pipe(
      map((characters) =>
        characters.map((c): CharacterCardModel => ({
          url: c.url,
          name: c.name || c.aliases?.[0]?.trim() || 'Unknown',
          gender: c.gender,
          culture: c.culture,
          born: c.born
        }))
      )
    );
  }
}
