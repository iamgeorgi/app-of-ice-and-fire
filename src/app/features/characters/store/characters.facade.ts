import { Store } from "@ngrx/store";
import { CharactersState } from "./characters.state";
import { inject, Injectable } from "@angular/core";
import { charactersFeature } from "./characters.reducer";
import { charactersActions } from "./characters.actions";
import { selectCharacterCards } from "./characters.selectors";

@Injectable({ providedIn: "root" })
export class CharactersFacade {
    private readonly store = inject<Store<CharactersState>>(Store);

    readonly characters = this.store.selectSignal(charactersFeature.selectCharacters);
    readonly characterCards = this.store.selectSignal(selectCharacterCards);
    readonly hasMore = this.store.selectSignal(charactersFeature.selectHasMore);
    readonly isLoading = this.store.selectSignal(charactersFeature.selectIsLoading);
    readonly error = this.store.selectSignal(charactersFeature.selectError);

    loadCharacters(page = 1, pageSize = 15) {
        this.store.dispatch(charactersActions.loadCharacters({ page, pageSize }));
    }

    loadMore() {
        this.store.dispatch(charactersActions.loadMore());
    }
}