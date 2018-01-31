import { SexoTipo } from './sexo.enum';

export class Contato {

	private _nome: string;
	private _email: string;
	private _favorito: boolean;
	private _sexo: SexoTipo;
	private _data: Date;


	constructor(nome: string, email: string, favorito: boolean, sexo: SexoTipo, data: Date) {
		this._nome = nome;
		this._email = email;
		this._favorito = favorito;
		this._sexo = sexo;
		this._data = data;
	}

	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public get email(): string {
		return this._email;
	}

	public set email(value: string) {
		this._email = value;
	}
	public get favorito(): boolean {
		return this._favorito;
	}

	public set favorito(value: boolean) {
		this._favorito = value;
	}

	public get sexo(): SexoTipo {
		return this._sexo;
	}

	public set sexo(value: SexoTipo) {
		this._sexo = value;
	}

	public get data(): Date {
		return this._data;
	}

	public set data(value: Date) {
		this._data = value;
	}
	
	idade (_data: Date): number {
		let hoje = new Date;
		let diferenca = _data.getFullYear() - hoje.getFullYear();
		return diferenca;
	}
	
}