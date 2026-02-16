import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CharacterCard } from '../character-card/character-card';
import { CharactersFacade } from '../../store/characters.facade';

@Component({
  selector: 'app-character-list',
  imports: [CharacterCard],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList implements OnInit {
  private charactersFacade = inject(CharactersFacade)
  readonly characters = this.charactersFacade.characters;
  readonly isLoading = this.charactersFacade.isLoading;
  readonly error = this.charactersFacade.error;

  ngOnInit(): void {
    this.charactersFacade.loadCharacters(1, 25);
  }
}
