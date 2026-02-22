import { Character } from "../../../shared/models/character.model";

export type CharactersState = {
    characters: Character[];
    isLoading: boolean;
    error: string;
    page: number;
    pageSize: number;
    hasMore: boolean;
}

export const initialCharactersState: CharactersState = {
    characters: [],
    isLoading: false,
    error: "",
    page: 0,
    pageSize: 15,
    hasMore: true,
}