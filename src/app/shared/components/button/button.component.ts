import { Component, ChangeDetectionStrategy, Input, HostBinding, HostListener, Renderer2, ElementRef } from '@angular/core';
import { convertToBoolProperty } from '../../helpers/convertToBool';

export type NxButtonSize = 'small' | 'medium' | 'large';

export type NxButtonShape = 'rectangle' | 'round' | 'semi-round';

export type NxButtonColor = 'primary' | 'secondary' | 'black';

export type NxButtonIconSlot = 'left' | 'right';

/* TODO ICON SLOT */
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'button[nxButton],a[nxButton],input[type="button"][nxButton],input[type="submit"][nxButton]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    /**
     * Button sizes, available sizes:
     * `small`, `medium`, `large`
     */
    @Input() size: NxButtonSize = 'medium';

    /**
     * Button shapes: `rectangle`, `round`, `semi-round`
     */
    @Input() shape: NxButtonShape = 'rectangle';

    /**
     * Button colors: `primary`, `secondary`
     */
    @Input() color: NxButtonColor = 'primary';

    /**
     * Icon slots: `left`, `right`
     */
    @Input() iconSlot: NxButtonIconSlot = 'left';

    /**
     * If set, element will fill its container
     */
    @Input()
    @HostBinding('class.full-width')
    get fullWidth(): boolean {
        return this._fullWidth;
    }
    set fullWidth(value: boolean) {
        this._fullWidth = convertToBoolProperty(value);
    }
    private _fullWidth = false;

    /* Icon slots */

    @HostBinding('class.icon-left')
    get iconLeft() {
        return this.iconSlot === 'left';
    }

    @HostBinding('class.icon-right')
    get iconRight() {
        return this.iconSlot === 'right';
    }

    /**
     * Disables the button
     */
    @Input()
    @HostBinding('attr.aria-disabled')
    @HostBinding('class.disabled')
    get disabled(): boolean {
        return this._disabled;
    }
    set disabled(value: boolean) {
        this._disabled = convertToBoolProperty(value);
        this.renderer.setProperty(this.hostElement.nativeElement, 'disabled', this.disabled);
    }
    private _disabled = false;

    /* Colors */

    @HostBinding('class.color-primary')
    get primary() {
        return this.color === 'primary';
    }

    @HostBinding('class.color-secondary')
    get secondary() {
        return this.color === 'secondary';
    }

    @HostBinding('class.color-black')
    get black() {
        return this.color === 'black';
    }

    /* Sizes */

    @HostBinding('class.size-small')
    get small() {
        return this.size === 'small';
    }

    @HostBinding('class.size-medium')
    get medium() {
        return this.size === 'medium';
    }

    @HostBinding('class.size-large')
    get large() {
        return this.size === 'large';
    }

    /* Shapes */

    @HostBinding('class.shape-rectangle')
    get rectangle() {
        return this.shape === 'rectangle';
    }

    @HostBinding('class.shape-round')
    get round() {
        return this.shape === 'round';
    }

    @HostBinding('class.shape-semi-round')
    get semiRound() {
        return this.shape === 'semi-round';
    }

    /**
     *
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
