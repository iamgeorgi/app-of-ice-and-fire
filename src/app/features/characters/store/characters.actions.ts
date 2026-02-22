import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Character } from "../../../shared/models/character.model";

export const charactersActions = createActionGroup({
    source: "CHARACTERS",
    events: {
        loadMore: emptyProps(),
        loadCharacters: props<{ page: number, pageSize: number }>(),
        loadCharactersSuccess: props<{ characters: Character[], page: number, pageSize: number }>(),
        loadCharactersError: props<{ error: string }>(),
    },
})