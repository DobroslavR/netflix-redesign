import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopularMovies } from 'src/app/app.component';

@Injectable({
    providedIn: 'root',
})
export class MovieService {
    constructor(private http: HttpClient) {}

    getPopularMovies(): Observable<PopularMovies> {
        return this.http.get<PopularMovies>('movie/popular');
    }
}
