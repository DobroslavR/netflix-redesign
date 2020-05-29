import { Genre } from './genre.model';
export class GetGenres {
    static readonly type = '[Genre] Get genres';
    constructor(public readonly genres: Genre[]) {}
}
