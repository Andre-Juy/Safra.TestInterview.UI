import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Home } from './pages/home/home';


export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'todo',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'todo',
        exposedModule: './Component',
      }).then(m => m.TodoList),
  },
  { path: '**', component: Home },
];