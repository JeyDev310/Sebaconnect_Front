import { LayoutComponent } from '../layout/layout.component';
import { WelcomeComponent } from './welcome/welcome.component';
export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'welcome', pathMatch: 'full'},
            { path: 'welcome',  component: WelcomeComponent },
            { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
        ]
    },

    // Not found

    { path: '**', redirectTo: 'welcome' },

];
