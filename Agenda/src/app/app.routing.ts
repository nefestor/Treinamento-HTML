import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContatosComponent } from './contatos/contatos.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ContatoDetalheComponent } from './contato-detalhe/contato-detalhe.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent}, //Caminho para um determinado componente (LocalHost:4200 sem nada, renderiza o HomeComponent)
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: 'contatos', component: ContatosComponent},
    { path: 'contato/:id', component: ContatoDetalheComponent}
];

//Classe do Angular, faz parte do pacote Core. Constante routing contém a definição/configuração das rotas do projeto. Esse arquivo está representando um módulo de rotas. Método ForRoot: vamos usar porque este arquivo contém as rotas raíz da aplicação
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

