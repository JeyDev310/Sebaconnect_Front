import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { AppService } from 'src/app/service/app.service';
import { ProjectsModule } from './routes/projects/projects.module';
import { MessageModule } from './routes/message/message.module';
import { StartProjectModule } from './routes/start-project/start-project.module';
import { UserSetModule } from './routes/user-set/user-set.module';
import { PagesModule } from 'src/app/routes/pages/pages.module'

// https://github.com/ocombe/ng2-translate/issues/218
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        BrowserAnimationsModule, // required for ng2-tag-input
        CoreModule,
        LayoutModule,
        SharedModule.forRoot(),
        RoutesModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        ProjectsModule,
        MessageModule,
        StartProjectModule,
        BrowserModule,
        UserSetModule,
        PagesModule
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule { }
