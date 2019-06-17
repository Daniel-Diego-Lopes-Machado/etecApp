import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'historico', loadChildren: './historico/historico.module#HistoricoPageModule' },
  { path: 'contatos', loadChildren: './contatos/contatos.module#ContatosPageModule' },
  { path: 'processoseletivo', loadChildren: './processoseletivo/processoseletivo.module#ProcessoseletivoPageModule' },
  { path: 'areadoprofessor', loadChildren: './areadoprofessor/areadoprofessor.module#AreadoprofessorPageModule' },
  { path: 'ensinomedio', loadChildren: './ensinomedio/ensinomedio.module#EnsinomedioPageModule' },
  { path: 'administracao', loadChildren: './cursos/administracao/administracao.module#AdministracaoPageModule' },
  { path: 'contabilidade', loadChildren: './cursos/contabilidade/contabilidade.module#ContabilidadePageModule' },
  { path: 'desenvolvimento', loadChildren: './cursos/desenvolvimento/desenvolvimento.module#DesenvolvimentoPageModule' },
  { path: 'informatica', loadChildren: './cursos/informatica/informatica.module#InformaticaPageModule' },
  { path: 'logistica', loadChildren: './cursos/logistica/logistica.module#LogisticaPageModule' },
  { path: 'marketing', loadChildren: './cursos/marketing/marketing.module#MarketingPageModule' },
  { path: 'secretariado', loadChildren: './cursos/secretariado/secretariado.module#SecretariadoPageModule' },
  { path: 'mais', loadChildren: './noticias/mais/mais.module#MaisPageModule' },
  { path: 'n1', loadChildren: './noticias/n1/n1.module#N1PageModule' },
  { path: 'n2', loadChildren: './noticias/n2/n2.module#N2PageModule' },
  { path: 'n3', loadChildren: './noticias/n3/n3.module#N3PageModule' },
  { path: 'n4', loadChildren: './noticias/n4/n4.module#N4PageModule' },
  { path: 'detalhes', loadChildren: './noticias/detalhes/detalhes.module#DetalhesPageModule' },
  { path: 'por-numero/:numero', loadChildren: './noticias/detalhes/detalhes.module#DetalhesPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
