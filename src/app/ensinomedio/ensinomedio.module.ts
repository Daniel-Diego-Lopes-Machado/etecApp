import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnsinomedioPage } from './ensinomedio.page';

const routes: Routes = [
  {
    path: '',
    component: EnsinomedioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnsinomedioPage]
})
export class EnsinomedioPageModule {}
