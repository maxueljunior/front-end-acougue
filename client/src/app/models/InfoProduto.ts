import { Content } from './IProduto';
export class InfoProduto{
  id: number;
  descricao: string;
  unidade: string;

  constructor(content: Content){
    this.id = content.id;
    this.descricao = content.descricao;
    this.unidade = content.unidade;
  }
}
