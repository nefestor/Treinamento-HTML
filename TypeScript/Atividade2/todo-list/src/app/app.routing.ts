import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './index';



const APP_ROUTES: Routes = [
    { path: '', component: AppComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
