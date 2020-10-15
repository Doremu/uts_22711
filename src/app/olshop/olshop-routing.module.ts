import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlshopPage } from './olshop.page';

const routes: Routes = [
  {
    path: '',
    component: OlshopPage
  },
  {
    path: ':itemId',
    loadChildren: () => import('./item-detail/item-detail.module').then( m => m.ItemDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlshopPageRoutingModule {}
