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
        on(charactersActions.loadCharactersSuccess, (state, { characters, page, pageSize }) => ({
            ...state,
            characters: [...state.characters, ...characters],
            page: page,
            pageSize: pageSize,
            isLoading: false,
            hasMore: characters.length > 0,
        })),
        on(charactersActions.loadCharactersError, (state, { error }) => ({
            ...state,
            error,
            isLoading: false,
        })),
    )
})