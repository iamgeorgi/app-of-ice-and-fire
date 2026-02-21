import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { charactersFeature } from './features/characters/store/characters.reducer';
import { CharactersEffects } from './features/characters/store/characters.effects';
import { favoritesFeature } from './features/favorites/store/favorites.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideState(charactersFeature),
    provideState(favoritesFeature),
    provideEffects([CharactersEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
