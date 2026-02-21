import { createActionGroup, props } from "@ngrx/store";

export const favoritesActions = createActionGroup({
    source: "FAVORITES",
    events: {
        setFavoritesIds: props<{ id: string }>(),
    },
})