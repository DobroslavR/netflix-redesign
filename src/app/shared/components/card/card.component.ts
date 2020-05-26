import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'nx-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
    @Input() title = '';
    @Input() popularity = 0;
    @Input() img = '';

    constructor() {}

    ngOnInit(): void {}
}
