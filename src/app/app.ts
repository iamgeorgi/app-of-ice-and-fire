import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersApiService } from './data-access/characters-api.service';
import { AsyncPipe } from '@angular/common';
import { map, tap } from 'rxjs';
import { CharacterList } from './components/character-list/character-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharacterList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor() { }
}
