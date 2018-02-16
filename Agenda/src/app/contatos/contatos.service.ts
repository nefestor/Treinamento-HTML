import { Injectable } from '@angular/core';

@Injectable()
export class ContatosService {

  getContatos() {
    return [
      {id: 1, nome: 'Tiago'},
      { id: 2, nome: 'Nefestor' },
      { id: 3, nome: 'Just' }
    ];
  }

  getContato(id: number) {
    let contatos = this.getContatos();
    for (let i=0; i<contatos.length; i++) {
        let contato = contatos[i];
        if (contato.id == id) {
          return contato;
        }
    }
    return null;
  }

  constructor() { }

}
