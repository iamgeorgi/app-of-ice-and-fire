import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CharactersApiService } from "../data-access/characters-api.service";
import { charactersActions } from "./characters.actions";
import { catchError, filter, map, of, switchMap, withLatestFrom } from "rxjs";
import { createSelector, Store } from "@ngrx/store";
import { charactersFeature } from "./characters.reducer";

@Injectable()
export class CharactersEffects {
    private actions$ = inject(Actions);
    private store = inject(Store);
    private charactersService = inject(CharactersApiService);

    loadMore$ = createEffect(() =>
        this.actions$.pipe(
            ofType(charactersActions.loadMore),
            withLatestFrom(
                this.store.select(
                    createSelector(
                        charactersFeature.selectPage,
                        charactersFeature.selectPageSize,
                        charactersFeature.selectIsLoading,
                        charactersFeature.selectHasMore,
                        (page, pageSize, isLoading, hasMore) => ({ page, pageSize, isLoading, hasMore })
                    )
                )
            ),
            filter(([, s]) => !s.isLoading && s.hasMore),
            map(([, s]) =>
                charactersActions.loadCharacters({
                    page: s.page + 1,
                    pageSize: s.pageSize,
                })
            )
        )
    );

    loadCharacters$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(charactersActions.loadCharacters),
            switchMap(({ page, pageSize }) => this.charactersService.loadCharacters(page, pageSize).pipe(
                map((characters) => charactersActions.loadCharactersSuccess({ characters, page, pageSize })),
                catchError((error) => of(charactersActions.loadCharactersError({ error })))
            ))
        )
    });
}