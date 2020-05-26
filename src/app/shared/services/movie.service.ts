import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopularMovies } from 'src/app/app.component';

export interface Genre {
    id: number;
    name: string;
}

export interface GenreReq {
    genres: Genre[];
}

@Injectable({
    providedIn: 'root',
})
export class MovieService {
    constructor(private http: HttpClient) {}

    getPopularMovies(): Observable<PopularMovies> {
        return this.http.get<PopularMovies>('movie/popular');
    }

    getGenres(): Observable<Genre[]> {
        return this.http.get<GenreReq>('genre/movie/list').pipe(map((x) => x.genres));
    }
}
