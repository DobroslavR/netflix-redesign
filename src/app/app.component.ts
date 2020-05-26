import { Observable } from 'rxjs';
import { MovieService } from './shared/services/movie.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
export interface Result {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
}

export interface PopularMovies {
    page: number;
    total_results: number;
    total_pages: number;
    results: Result[];
}

@Component({
    selector: 'nx-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'netflix';
    constructor(private movie: MovieService) {}

    public playIcon = faPlay;

    public popularMovies: Observable<Result[]> = this.movie.getPopularMovies().pipe(map((x) => x.results));
}
