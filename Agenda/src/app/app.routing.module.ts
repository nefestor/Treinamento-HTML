import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';


const appRoutes: Routes = [
    { path: '', component: HomeComponent }, //Caminho para um determinado componente (LocalHost:4200 sem nada, renderiza o HomeComponent)
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]

}) 
export class AppRoutingModule {}