import { Component, ChangeDetectionStrategy, Input, HostBinding, HostListener, Renderer2, ElementRef } from '@angular/core';
import { convertToBoolProperty } from '../../helpers/convertToBool';

export type NxButtonSize = 'small' | 'medium' | 'large';

export type NxButtonShape = 'rectangle' | 'round' | 'semi-round';

export type NxButtonColor = 'primary' | 'secondary';

@Component({
    selector: 'button[nxButton],a[nxButton],input[type="button"][nxButton],input[type="submit"][nxButton]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    /**
     * Button size, available sizes:
     * `small`, `medium`, `large`
     */
    @Input() size: NxButtonSize = 'medium';

    /**
     * Button shapes: `rectangle`, `round`, `semi-round`
     */
    @Input() shape: NxButtonShape = 'rectangle';

    /**
     * Button shapes: `primary`, `secondary`
     */
    @Input() color: NxButtonColor = 'primary';

    /**
     * Disables the button
     */
    @Input()
    @HostBinding('attr.aria-disabled')
    @HostBinding('class.btn--disabled')
    get disabled(): boolean {
        return this._disabled;
    }
    set disabled(value: boolean) {
        this._disabled = convertToBoolProperty(value);
        this.renderer.setProperty(this.hostElement.nativeElement, 'disabled', this.disabled);
    }
    private _disabled = false;

    /* Colors */

    @HostBinding('class.btn--color-primary')
    get primary() {
        return this.color === 'primary';
    }

    @HostBinding('class.btn--color-secondary')
    get secondary() {
        return this.color === 'secondary';
    }

    /* Sizes */

    @HostBinding('class.btn--size-small')
    get small() {
        return this.size === 'small';
    }

    @HostBinding('class.btn--size-medium')
    get medium() {
        return this.size === 'medium';
    }

    @HostBinding('class.btn--size-large')
    get large() {
        return this.size === 'large';
    }

    /* Shapes */

    @HostBinding('class.btn--shape-rectangle')
    get rectangle() {
        return this.shape === 'rectangle';
    }

    @HostBinding('class.btn--shape-round')
    get round() {
        return this.shape === 'round';
    }

    @HostBinding('class.btn--shape-semi-round')
    get semiRound() {
        return this.shape === 'semi-round';
    }

    /**
     * @private
     * Keep this handler to partially support anchor disabling.
     * Unlike button, anchor doesn't have 'disabled' DOM property,
     * so handler will be called anyway. We preventing navigation and bubbling.
     * Disabling is partial due to click handlers precedence. Consider example:
     * <a nbButton [disabled]="true" (click)="clickHandler()">...</a>
     * 'clickHandler' will be called before our host listener below. We can't prevent
     * such handlers call.
     */
    @HostListener('click', ['$event'])
    onClick(event: Event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }

    constructor(protected renderer: Renderer2, protected hostElement: ElementRef<HTMLElement>) {}
}
