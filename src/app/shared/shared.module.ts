import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardModule } from './components/card/card.module';
import { ButtonModule } from './components/button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [],
    imports: [CommonModule, ButtonModule, CardModule, FontAwesomeModule],
    exports: [ButtonModule, CardModule, FontAwesomeModule],
})
export class SharedModule {}
