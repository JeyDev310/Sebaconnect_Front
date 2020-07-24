import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatorService } from '../core/translator/translator.service';
import { MenuService } from '../core/menu/menu.service';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent} from './welcome/welcome.component';
import { menu } from './menu';
import { routes } from './routes';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { ReviewSliderComponent } from './inspiration/review-slider/review-slider.component'


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
      WelcomeComponent,
      AboutusComponent,
      InspirationComponent,
      ReviewSliderComponent
    ],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {
    constructor(public menuService: MenuService, tr: TranslatorService) {
        menuService.addMenu(menu);
    }
}
