
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContatosComponent } from './contatos/contatos.component';
import { routing } from './app.routing';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { ContatoDetalheComponent } from './contato-detalhe/contato-detalhe.component';
import { ContatosService } from './contatos/contatos.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContatosComponent,
    ContatoDetalheComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    CustomMaterialModule,
    routing
  ],
  providers: [ContatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

