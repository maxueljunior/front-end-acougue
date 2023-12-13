import { Content, Fornecedor, Pageable, Sort } from "./IFornecedor";

export class InfoFornecedor {
  id: number;
  razaoSocial: string;
  cnpj: string;
  nomeContato: string;
  telefone: string;

  constructor(content: Content){
    this.id = content?.id;
    this.razaoSocial = content.razaoSocial;
    this.cnpj = content.cnpj;
    this.nomeContato = content.nomeContato;
    this.telefone = content.telefone;
  }
}
