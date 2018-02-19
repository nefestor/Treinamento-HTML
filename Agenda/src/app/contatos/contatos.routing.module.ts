import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { ContatosComponent } from './contatos.component';
import { ContatoDetalheComponent } from './contato-detalhe/contato-detalhe.component';

const contatosRoutes: Routes = [
    { path: 'contatos', component: ContatosComponent },
    { path: 'contato/:id', component: ContatoDetalheComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(contatosRoutes);


@NgModule({
    imports: [
        RouterModule.forChild(contatosRoutes)
    ],
    exports: [
        RouterModule
    ]

})
export class ContatosRoutingModule { }