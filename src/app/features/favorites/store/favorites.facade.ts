import { inject, Injectable } from "@angular/core";
import { FavoritesState } from "./favorites.state";
import { Store } from "@ngrx/store";
import { favoritesActions } from "./favorites.actions";

@Injectable({ providedIn: "root" })
export class FavoritesFacade {
    private readonly store = inject<Store<FavoritesState>>(Store);

    addToFavorites(id: string) {
        this.store.dispatch(favoritesActions.setFavoritesIds({ id }))
    }
}