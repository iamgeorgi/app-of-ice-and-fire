import { createFeature, createReducer, on } from "@ngrx/store";
import { initialFavoritesState } from "./favorites.state";
import { favoritesActions } from "./favorites.actions";

export const favoritesFeature = createFeature({
    name: "favorites",
    reducer: createReducer(
        initialFavoritesState,
        on(favoritesActions.setFavoritesIds, (state, { id }) => ({
            ...state,
            ids: [...state.ids, id]
        })),
    )
})