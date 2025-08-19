import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { Login } from './pages/login/login';

export const routes: Routes = [
    { path: 'login', 
        component: Login },
    {
        path: '', 
        canActivate: [authGuard],
        loadComponent: () =>
            loadRemoteModule('peopleView', './Component')
                .then((m) => m.App)
    },
    {

        path: 'people',
        canActivate: [authGuard],
        loadComponent: () =>
            loadRemoteModule({
                remoteName: 'peopleView',
                exposedModule: './Component'
            }).then(m => m.PeopleViewListComponent)
    },
    {
        path: 'people/create',
        canActivate: [authGuard],
        loadComponent: () =>
            loadRemoteModule({
                remoteName: 'peopleCrud',
                exposedModule: './ComponentA'
            }).then(m => m.PeopleCreate)
    },
    {
        path: 'people/edit/:id',
        canActivate: [authGuard],
        loadComponent: () =>
            loadRemoteModule({
                remoteName: 'peopleCrud',
                exposedModule: './ComponentB'
            }).then(m => m.PeopleEdit)
    },
    { path: '**', redirectTo: '' }
];
