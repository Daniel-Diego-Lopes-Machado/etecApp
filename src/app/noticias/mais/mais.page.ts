import { Component, OnInit } from '@angular/core';


import {Router} from '@angular/router';
import { PassandoDadosService } from 'src/app/servicos/passando-dados.service';

@Component({
  selector: 'app-mais',
  templateUrl: './mais.page.html',
  styleUrls: ['./mais.page.scss'],
})
export class MaisPage implements OnInit {

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
    }, 
    
    { nome: 'Ajuda com e-mail institucional', img: 'assets/ajuda.jpg'
    , link:'/por-numero/4'
    ,texto:'Para os alunos com problemas para acessar o e-mail institucional, acesse o seguinte link e responda o questionário. <a href>https://goo.gl/forms/iU55vO2EE80Fnaw62</a>'
    ,data: '12 fev, 2019',person: 'Matheus Furtado'
    }, 

    { nome: 'Aviso de convocação 2', img: 'assets/convocacao.jpg'
    , link:'/por-numero/5'
    ,texto:' Aviso de Convocação nº 2 – Aviso de Abertura nº 040/02/2018 – Processo 2877/2018 Convocação 2 – Gestão Empreendedora e Inovação Aviso de Convocação nº 2 – Aviso de Abertura nº 040/03/2017 – Processo 3891/2017 Convocação 2 – Sociologia'
    ,data: '30 jan, 2019',person: 'Matheus Furtado' 
    },

    { nome: 'Aviso de convocação', img: 'assets/convocacao.jpg'
    ,link:'/por-numero/6'
    ,texto:' <h3><strong>Aviso de Convocação  nº 1 – Aviso de Abertura nº 040/05/2018 – Processo 1467557/2018</strong></h3> <p> <a href = "http://www.etecbarrabonita.com.br/wp-content/uploads/2019/01/22-01-19-Convocacao-1-Samra.pdf">22-01-19 Convocacao 1 – Samra</a></p> <h3><strong>Aviso de Convocação  nº 1 – Aviso de Abertura nº 040/06/2018 – Processo 1467768/2018</strong></h3> <p> <a href = "http://www.etecbarrabonita.com.br/wp-content/uploads/2019/01/Aviso-de-Convocacao-n1-Calculos-Financeiros.pdf">Aviso de Convocacao n° 1 – Calculos Financeiros</a></p>'
    ,data: '21 jan, 2019',person: 'Matheus Furtado'     
    }, 

    { nome: 'Resultado do Vestibulinho – 1º Semestre 2019', img: 'assets/vestibulinho.jpg'
    , link:'/por-numero/7'
    ,texto:'<p> Desde as 18 horas do último domingo, dia 16 de dezembro, já está disponível o gabarito oficial do Vestibulinho Etec referente ao 1º semestre de 2019, abrangendo, na Etec Comendador João Rays, os cursos de:</P><li>Administração</strong></li><li>Desenvolvimento de Sistemas</li><li>Ensino Médio</li><li>Informática para Internet – Integrado ao Ensino Médio</li><li>Logística</li><p>Se ainda não viu, clique <a href = "https://www.vestibulinhoetec.com.br/gabarito/">aqui</a> e confira suas respostas.'
    ,data: '21 dez, 2018',person: 'Sergio Lacerda' 
    },

    { nome: 'Programa de Graduação em Portugal', img: 'assets/graduacaoPortugal.jpg'
    , link:'/por-numero/8'
    ,texto:'<p>Resultado de um acordo firmado em 2018 entre o CEETEPS e o Instituto Politécnico de Coimbra – IPC, a iniciativa visa promover programas de mobilidade (intercâmbio), em todas as áreas de conhecimento, de interesse de ambas as instituições, promovendo projetos de internacionalização e fortalecendo as relações acadêmicas entre Brasil e Portugal.</p><p>Informações aos interessados estão disponíveis nos materiais de divulgação abaixo, especialmente direcionados a estudantes brasileiros:</p><li><a href = "http://www.etecbarrabonita.com.br/wp-content/uploads/2018/11/Brochura%20Brasil.pdf">Brochura Brasil</a></li><li><a href = "http://www.etecbarrabonita.com.br/wp-content/uploads/2018/11/201811-IPC-Apresentacao.pdf">Apresentação IPC</a></li><li><a href = "https://www.youtube.com/watch?v=W3cGYi21H6k">Depoimento de brasileiros que estudam no IPC</a></li>'
    ,data: '4 dez, 2018',person: 'Sergio Lacerda' 
    },

    { nome: 'Etec de Portas Abertas para a comunidade', img: 'assets/etecPortasAbertas.jpg'
    , link:'/por-numero/9'
    ,texto:'<p>Em mais uma edição do evento Etec de Portas Abertas, realizado segunda-feira, 29 de outubro, tivemos a oportunidade de novamente proporcionar à comunidade e estudantes da região uma visão sobre nossos cursos, instalações e projetos pedagógicos.</P><p>Os visitantes puderam conhecer nossa infraestrutura, participar de apresentações, minicursos e palestras abordando temas de interesse profissional, em um importante momento de troca de experiências, principalmente para os alunos interessados em ingressar em nossos cursos, os quais puderam interagir com professores e alunos dos cursos técnicos e ensino médio.</p><p>Dentre as atividades realizadas, figuraram:</p><li>Apresentações sobre os cursos de Administração, Logística, Desenvolvimento de Sistemas, Ensino Médio e Ensino Médio Integrado.</li><li>Mini palestra: “Prepare-se para uma seleção de emprego”, com Amanda Zanetti.</li><li>Mini palestra: “Conflitos no ambiente de trabalho: Ter razão? Eis a questão”, com Amanda Bragion.</li><li>Mini cursos: Photoshop e Excel.</li><p>Também foi feita a divulgação do Vestibulinho, cujas inscrições já estão abertas e vão até às 15h do dia 12 de novembro. O exame será realizado às 13:30h do dia 16 de dezembro.</p>'
    ,data: '6 nov, 2018',person: 'Sergio Lacerda' 
    },

    { nome: 'Microsoft Imagine – Parceria Microsoft e Centro Paula Souza', img: 'assets/microsoftImagine.jpg'
    , link:'/por-numero/10'
    ,texto:'<p>É uma WebStore onde, os alunos e professores poderão realizar o download dos produtos Microsoft gratuitamente. Para obter este benefício, alunos ou professores deverão ter seu e-mail institucional e vínculo ativo com a Etec ou Fatec, ou seja, somente será permitido o download para os alunos durante o período em que estiver cursando uma Etec, Fatec ou professor em exercício.</p><p>O Microsoft Imagine dirige-se a instituições de ensino secundário, profissional e superior que pretendam oferecer aos seus alunos o acesso gratuito a tecnologias Microsoft. É um acordo especial entre o Centro Paula Souza e a Microsoft que inclui as mais recentes ferramentas de desenvolvimento, plataformas e servidores da Microsoft.</p>'
    ,data: '24 abr, 2018',person: 'Sergio Lacerda' 
    }
 
 
 
  ]; // variavel do tipo ARRAY, contendo uma lista de objetos de noticiais.


  constructor(private rota:Router,private enviaDados:PassandoDadosService) { }

  ngOnInit() {
  }

  public mostraNoticia(noticia){
    this.enviaDados.setDados('noticia',noticia);
    this.rota.navigate(['/detalhes']);

  }


}
