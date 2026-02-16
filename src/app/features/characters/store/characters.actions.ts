import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Character } from "../../../shared/models/character.model";

export const charactersActions = createActionGroup({
    source: "CHARACTERS",
    events: {
        loadCharacters: props<{ page: number, pageSize: number }>(),
        loadCharactersSuccess: props<{ characters: Character[] }>(),
        loadCharactersError: props<{ error: string }>(),
    },
})