import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'characters' },
    {
        path: 'characters',
        loadComponent: () =>
            import('./features/characters/components/characters-page/characters-page')
                .then(m => m.CharactersPage),
    },
    {
        path: 'favorites',
        loadComponent: () =>
            import('./features/favorites/components/favorites-page/favorites-page')
                .then(m => m.FavoritesPage),
    },
    { path: '**', redirectTo: 'characters' },
];
