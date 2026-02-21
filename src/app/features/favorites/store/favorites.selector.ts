import { createSelector } from "@ngrx/store";
import { selectCharacterCards } from "../../characters/store/characters.selectors";

export const selectFavoriteCharacters = createSelector(
    selectCharacterCards,
    (characters) => characters.filter(c => c.favorite)
);