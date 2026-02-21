import { Component, inject, OnInit } from '@angular/core';
import { CharacterCardModel } from '../../../../shared/models/character.model';
import { CharactersFacade } from '../../../characters/store/characters.facade';
import { FavoritesFacade } from '../../store/favorites.facade';
import { CharacterList } from "../../../../shared/components/character-list/character-list";

@Component({
  selector: 'app-favorites-page',
  imports: [CharacterList],
  templateUrl: './favorites-page.html',
  styleUrl: './favorites-page.css',
})
export class FavoritesPage {
  private favoritesFacade = inject(FavoritesFacade);
  readonly favoriteCharacters = this.favoritesFacade.favoriteCharacters;

  onToggleFavorites(url: string) {
    this.favoritesFacade.addToFavorites(url);
  }

}
