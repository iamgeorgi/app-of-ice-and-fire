import { createFeature, createReducer, on } from "@ngrx/store"
import { initialCharactersState } from "./characters.state"
import { charactersActions } from "./characters.actions"

export const charactersFeature = createFeature({
    name: "characters",
    reducer: createReducer(
        initialCharactersState,
        on(charactersActions.loadCharacters, (state) => ({
            ...state,
            isLoading: true,
        })),
        on(charactersActions.loadCharactersSuccess, (state, { characters }) => ({
            ...state,
            characters: [...characters],
            isLoading: false,
        })),
        on(charactersActions.loadCharactersError, (state, { error }) => ({
            ...state,
            error,
            isLoading: false,
        })),
    )
})