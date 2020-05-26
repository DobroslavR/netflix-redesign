import { MovieService, Genre } from './../../services/movie.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'nx-genre-list',
    templateUrl: './genre-list.component.html',
    styleUrls: ['./genre-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenreListComponent implements OnInit {
    constructor(private movieService: MovieService) {}

    public genreList: Observable<Genre[]> = this.movieService.getGenres();

    ngOnInit(): void {}
}
