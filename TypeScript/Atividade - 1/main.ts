import { Contato } from "./teste";
import { SexoTipo } from "./sexo.enum";

class Main {

    public static criarContato(nome: string, email: string, favorito: boolean, sexo: SexoTipo, data: Date) : void {
        const contato = new Contato(nome, email, favorito, sexo, data);
        console.log("Contato criado com sucesso.");
        console.log(`Nome: ${nome}`);

    }
}

Main.criarContato('Tiago', 'tiago.pereira@forlogic.net', true, 0, new Date(1996, 1, 5));