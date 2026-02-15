import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Character } from "../../../shared/models/charcter.model";

export const charactersActions = createActionGroup({
    source: "CHARACTERS",
    events: {
        loadCharacters: props<{ page: number, pageSize: number }>(),
        loadCharactersSuccess: props<{ characters: Character[] }>(),
        loadCharactersError: props<{ error: any }>(),
    },
})