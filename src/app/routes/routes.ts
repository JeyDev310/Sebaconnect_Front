import { LayoutComponent } from '../layout/layout.component';
import { WelcomeComponent } from './welcome/welcome.component';
export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'category', pathMatch: 'full'},
            { path: 'welcome',  component: WelcomeComponent },
            { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
            { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
            { path: 'my-project', loadChildren: () => import('./my-project/my-project.module').then(m => m.MyProjectModule) },
            { path: 'project-detail', loadChildren: () => import('./project-detail/project-detail.module').then(m => m.ProjectDetailModule) },
            { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
            { path: 'message', loadChildren: () => import('./message/message.module').then(m => m.MessageModule) },
            { path: 'start-project', loadChildren: () => import('./start-project/start-project.module').then(m => m.StartProjectModule) },
        ]
    },

    // Not found

    { path: '**', redirectTo: 'welcome' },

];
