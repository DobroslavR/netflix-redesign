import { Genre } from './genre.model';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { GetGenres } from './genre.action';

export interface GenreStateModel {
    genres: Genre[];
}

@Injectable({
    providedIn: 'root',
})
@State<GenreStateModel>({
    name: 'genre',
    defaults: {
        genres: [],
    },
})
export class GenreState {
    constructor() {}

    @Selector()
    static genres({ genres }: GenreStateModel) {
        return genres;
    }

    @Action(GetGenres)
    getGenres({ setState }: StateContext<GenreStateModel>, { genres }: GetGenres) {
        setState({
            genres,
        });
    }
}
