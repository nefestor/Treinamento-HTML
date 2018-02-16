import { Component, OnInit } from '@angular/core';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  contatos: any[];
  constructor(private ContatosService: ContatosService) { }

  ngOnInit() {
    this.contatos = this.ContatosService.getContatos();
  }

}
