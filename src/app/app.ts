import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersApiService } from './data-access/characters-api.service';
import { AsyncPipe } from '@angular/common';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  charactersList$: any
  constructor(private charactersService: CharactersApiService) { }

  ngOnInit(): void {
    this.charactersList$ = this.charactersService.loadCharacters(1, 25).pipe(
      map(characters => characters.map((c: { name: any; aliases: any[]; }) => c.name || c.aliases[0])),
      tap(res => console.log(res))
    );
  }
}
