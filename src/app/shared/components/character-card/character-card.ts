import { Component, input, output } from '@angular/core';
import { CharacterCardModel } from '../../models/character.model';

@Component({
  selector: 'app-character-card',
  imports: [],
  templateUrl: './character-card.html',
  styleUrl: './character-card.css',
})
export class CharacterCard {
  character = input.required<CharacterCardModel>();
  toggleFavorite = output<string>();
}
