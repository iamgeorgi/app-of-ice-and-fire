import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'characters' },
    {
        path: 'characters',
        loadComponent: () =>
            import('./features/characters/components/characters-page/characters-page')
                .then(m => m.CharactersPage),
    },
    { path: '**', redirectTo: 'characters' },
];
