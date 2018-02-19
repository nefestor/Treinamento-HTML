import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ContatosComponent } from './contatos.component';
import { ContatoDetalheComponent } from './contato-detalhe/contato-detalhe.component';
import { ContatosService } from './contatos.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { ContatosRoutingModule } from './contatos.routing.module';



@NgModule({
    declarations: [
        ContatosComponent,
        ContatoDetalheComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        HttpModule,
        FlexLayoutModule,
        CustomMaterialModule,
        ContatosRoutingModule
     ],
    exports: [],
    providers: [ContatosService],
})
export class ContatosModule {}