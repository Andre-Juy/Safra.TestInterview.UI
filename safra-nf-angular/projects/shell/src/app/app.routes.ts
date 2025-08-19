import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => loadRemoteModule('peopleView', './Component').then((m) => m.App)},
    {
        
        path: 'people',
        loadComponent: () =>
            loadRemoteModule({
                remoteName: 'peopleView',
                exposedModule: './Component'
            }).then(m => m.PeopleViewListComponent)
    },
    {
        path: 'people/create',
        loadComponent: () =>
            loadRemoteModule({
                remoteName: 'peopleCrud',
                exposedModule: './ComponentA'
            }).then(m => m.PeopleCreate)
    },
    {
        path: 'people/edit/:id',
        loadComponent: () =>
            loadRemoteModule({
                remoteName: 'peopleCrud',
                exposedModule: './ComponentB'
            }).then(m => m.PeopleEdit)
    }
];
