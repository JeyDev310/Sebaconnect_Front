import { LayoutComponent } from '../layout/layout.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { LockComponent } from './pages/lock/lock.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InspirationComponent } from './inspiration/inspiration.component';
export const routes = [

    {
        path: '', component: LayoutComponent,

        children: [

            { path: 'aboutus', component: AboutusComponent },
            { path: 'inspiration', component: InspirationComponent },
            { path: 'welcome',  component: WelcomeComponent },
            { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
            { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
            { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
            { path: 'my-project', loadChildren: () => import('./my-project/my-project.module').then(m => m.MyProjectModule) },
            { path: 'project-detail', loadChildren: () => import('./project-detail/project-detail.module').then(m => m.ProjectDetailModule) },
            { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
            { path: 'message', loadChildren: () => import('./message/message.module').then(m => m.MessageModule) },
            { path: 'start-project', loadChildren: () => import('./start-project/start-project.module').then(m => m.StartProjectModule) },
            { path: 'user-set', loadChildren: () => import('./user-set/user-set.module').then(m => m.UserSetModule) },
            { path: '', redirectTo: 'category', pathMatch: 'full'},
        ]
    },

    // Not found
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
    { path: 'lock', component: LockComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '404', component: Error404Component },
    { path: '500', component: Error500Component },


    // Not found
    { path: '**', redirectTo: 'home' }

];
