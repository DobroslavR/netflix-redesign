import { ApiInterceptor } from './@core/interceptors/api.interceptor';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { TranslocoRootModule } from './transloco-root.module';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        NgxsModule.forRoot([], {
            developmentMode: !environment.production,
        }),
        NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
        NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        TranslocoRootModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
