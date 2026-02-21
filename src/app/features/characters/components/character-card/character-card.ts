import { Component, inject, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CharacterCardModel } from '../../../../shared/models/character.model';
import { FavoritesFacade } from '../../../favorites/store/favorites.facade';

@Component({
  selector: 'app-character-card',
  imports: [],
  templateUrl: './character-card.html',
  styleUrl: './character-card.css',
})
export class CharacterCard {
  private favoritesFacade = inject(FavoritesFacade);
  character = input.required<CharacterCardModel>();

  onAddToFavorites() {
    this.favoritesFacade.addToFavorites(this.character().url);
  }
}
