import { Character } from "../../../shared/models/charcter.model";

export type CharactersState = {
    characters: Character[];
    isLoading: boolean;
    error: string;
}

export const initialCharactersState: CharactersState = {
    characters: [],
    isLoading: false,
    error: ""
}