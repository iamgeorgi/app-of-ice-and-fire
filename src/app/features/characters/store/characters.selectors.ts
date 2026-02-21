import { createSelector } from "@ngrx/store";
import { charactersFeature } from "./characters.reducer";
import { favoritesFeature } from "../../favorites/store/favorites.reducer";
import { CharacterCardModel } from "../../../shared/models/character.model";

export const selectCharacterCards = createSelector(
  charactersFeature.selectCharacters,
  favoritesFeature.selectIds,
  (characters, favIds): CharacterCardModel[] => {
    const favSet = new Set(favIds);

    return characters.map(c => ({
      url: c.url,
      name: c.name?.trim() || c.aliases?.[0]?.trim() || 'Unknown',
      gender: c.gender || 'Unknown',
      culture: c.culture || 'Unknown',
      born: c.born || 'Unknown',
      favorite: favSet.has(c.url),
    }));
  }
);