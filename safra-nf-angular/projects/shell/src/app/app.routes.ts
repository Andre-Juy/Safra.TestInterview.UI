import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => loadRemoteModule('peopleView', './Component').then((m) => m.App)},
    {
        
        path: 'people-view',
        loadComponent: () =>
            loadRemoteModule({
                remoteName: 'peopleView',
                exposedModule: './Component'
            }).then(m => m.PeopleViewListComponent)
    }
];
