import { SharedModule } from './../../shared.module';
import { GenreListComponent } from './genre-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [GenreListComponent],
    imports: [CommonModule, SharedModule],
    exports: [GenreListComponent],
})
export class GenreListModule {}
