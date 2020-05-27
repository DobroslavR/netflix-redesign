import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardModule } from './components/card/card.module';
import { ButtonModule } from './components/button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    declarations: [],
    imports: [CommonModule, FlexLayoutModule, ButtonModule, CardModule, FontAwesomeModule],
    exports: [ButtonModule, CardModule, FontAwesomeModule, FlexLayoutModule],
})
export class SharedModule {}
