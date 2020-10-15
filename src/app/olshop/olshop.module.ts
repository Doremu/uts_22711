import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlshopPageRoutingModule } from './olshop-routing.module';

import { OlshopPage } from './olshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlshopPageRoutingModule
  ],
  declarations: [OlshopPage]
})
export class OlshopPageModule {}
