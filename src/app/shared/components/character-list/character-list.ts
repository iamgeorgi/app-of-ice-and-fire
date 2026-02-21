import { Component, inject, input, OnInit, output } from '@angular/core';
import { CharacterCard } from '../character-card/character-card';
import { CharacterCardModel } from '../../models/character.model';

@Component({
  selector: 'app-character-list',
  imports: [CharacterCard],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList {
  characters = input.required<CharacterCardModel[]>();
  toggleFavorite = output<string>();
}
