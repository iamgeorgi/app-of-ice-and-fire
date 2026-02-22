import { Component, inject } from '@angular/core';
import { CharactersFacade } from '../../store/characters.facade';
import { CharacterList } from "../../../../shared/components/character-list/character-list";
import { FavoritesFacade } from '../../../favorites/store/favorites.facade';

@Component({
  selector: 'app-characters-page',
  imports: [CharacterList],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.css',
})

export class CharactersPage {
  private charactersFacade = inject(CharactersFacade);
  private favoritesFacade = inject(FavoritesFacade);
  readonly characters = this.charactersFacade.characterCards;
  readonly isLoading = this.charactersFacade.isLoading;
  readonly error = this.charactersFacade.error;

  ngOnInit(): void {
    this.charactersFacade.loadCharacters();
  }

  onToggleFavorites(url: string) {
    this.favoritesFacade.addToFavorites(url);
  }

  loadMore() {
    this.charactersFacade.loadMore();
  }
}
