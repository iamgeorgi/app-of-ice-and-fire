import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CharactersApiService } from "../data-access/characters-api.service";
import { charactersActions } from "./characters.actions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class CharactersEffects {
    private actions$ = inject(Actions);
    private charactersService = inject(CharactersApiService);
    
    loadCharacters$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(charactersActions.loadCharacters),
            switchMap(({ page, pageSize }) => this.charactersService.loadCharacters(page, pageSize).pipe(
                map((characters) => charactersActions.loadCharactersSuccess({ characters })),
                catchError((error) => of(charactersActions.loadCharactersError({ error })))
            ))
        )
    });
}