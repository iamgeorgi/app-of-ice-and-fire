import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Character } from "../../../shared/models/charcter.model";

@Injectable({ providedIn: 'root' })
export class CharactersApiService {
    private readonly baseUrl = 'https://www.anapioficeandfire.com/api/characters';

    constructor(private http: HttpClient) { }

    loadCharacters(page: number, pageSize: number): Observable<Character[]> {
        const params = new HttpParams()
            .set('page', page)
            .set('pageSize', pageSize)
        
        return this.http.get<Character[]>(this.baseUrl, { params });
    }

}