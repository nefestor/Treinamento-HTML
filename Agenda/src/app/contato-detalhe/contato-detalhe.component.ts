import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-contato-detalhe',
  templateUrl: './contato-detalhe.component.html',
  styleUrls: ['./contato-detalhe.component.css']
})
export class ContatoDetalheComponent implements OnInit {

  id: string; 
  inscricao: Subscription;

  constructor(private route: ActivatedRoute) { 
    //console.log(this.route)
    //this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
   this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    ); //Inscreveu nas mudanças dos parâmetros
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe(); //Desinscreve da inscrição
  }

}
