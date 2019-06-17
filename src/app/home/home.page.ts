import { Component } from '@angular/core';

import {Router} from '@angular/router';
import {PassandoDadosService} from '../servicos/passando-dados.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaNoticiais = [   
   
    { nome: 'Minha história na Etec: Rony Aparecido Piqueira (Informática)', img: 'assets/minhaHistoria.jpg'
    , link:'/por-numero/1'
    ,texto:'<p> Meu nome é Rony, tenho 34 anos, e atuo na área de TI (Tecnologia da Informação) há pouco mais de 8 anos. Antes de me aventurar na área de tecnologia, já possuía algumas competências advinda de trabalhos anteriores em empresas do comércio, e obtidos também na área acadêmica com a formação de Técnico em Contabilidade e Bacharel em Administração (ênfase em TI).</P> O interesse em buscar algo novo aumentava de forma constante, e então, entendi que era necessário desenvolver novos competências, era necessário complementar o conhecimento adquirido na graduação. Por diversas indicações e pelo meu interesse na área de tecnologia, decidi investir no curso Técnico de Informática da ETEC Comendador João Rays.'
    ,data: '8 maio, 2019',person: 'Sergio Lacerda' 
    },    

   { nome: 'Semana Paulo Freire', img: 'assets/semanaPaulo.jpg'
    , link:'/por-numero/2'
    ,texto:'<p>Paulo Freire (1921-1997) foi um educador brasileiro, criador do método inovador no ensino da alfabetização, para adultos, trabalhando com palavras geradas a partir da realidade dos alunos. Seu método foi levado para diversos países.</p><p>Paulo Freire nasceu no Recife, Pernambuco, no dia 19 de setembro de 1921. Filho de Joaquim Temístocles Freire, capitão da Polícia Militar e de Edeltrudes Neves Freire morou na cidade do Recife até 1931, quando foi morar no município vizinho de Jaboatão dos Guararapes, onde permaneceu durante dez anos.</p> Iniciou o curso ginasial no Colégio 14 de Julho, no centro do Recife. Com 13 anos perdeu seu pai e coube a sua mãe a responsabilidade de sustentar todos os 4 filhos. Sem condições de continuar pagando a escola, sua mãe pediu ajuda ao diretor de Colégio Oswaldo Cruz, que lhe concedeu matrícula gratuita e o transformou em auxiliar de disciplina, e posteriormente em professor de língua portuguesa. Em 1943 ingressou na Faculdade de Direito do Recife. Em 1944 se casou com Elza Maria Costa de Oliveira, professora primária, com quem teve cinco filhos. Depois de formado continuou como professor de português no Colégio Oswaldo Cruz e de Filosofia da Educação na Escola de Belas Artes da Universidade Federal de Pernambuco.'
    ,data: '26 abr, 2019',person: 'Erica Gigliotti'
   },

   { nome: 'Processo Seletivo Simplificado de Docentes', img: 'assets/processoSeletivo.jpg'
    ,link:'/por-numero/3'
    ,texto:'Estão abertas as inscrições para o Processo Seletivo Simplificado de Docentes, objetivando a formação de cadastropara a contratação temporária de excepcional caráter público, para os Componentes Curriculares Cálculos Financeiros (Administração) e Língua Portuguesa e Literatura (Ensino Médio), no período de 11/03/2019 à 25/03/2019 (exceto aos sábados, domingos, feriados e pontos facultativos) no horário das 08:00 às 11:00, das 14:00 às 16:30 e das 19:00 às 21:00.Leia o Edital de Abertura para conhecer as condições para inscrição e as fases do Processo Seletivo'
    ,data: '11 mar, 2019',person: 'Matheus Furtado'     
    } 
 
 
  ]; // variavel do tipo ARRAY, contendo uma lista de objetos de noticiais.


  constructor(private rota:Router,private enviaDados:PassandoDadosService) { 
    
  }



  public mostraNoticia(noticia){
    this.enviaDados.setDados('noticia',noticia);
    this.rota.navigate(['/detalhes']);

  }

}
