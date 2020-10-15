import { Component, OnInit } from '@angular/core';
import {Item} from '../olshop/items.model';
import {ItemsService} from '../olshop/items.service';
import {AlertController, IonItemSliding} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  items: Item[];
  total: number;
  constructor(
      private itemsService: ItemsService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.items = this.itemsService.getAllItem();
    this.total = this.items.length;
    console.log('total : ' + this.total);
  }
  ionViewDidEnter() {
    this.items = this.itemsService.getAllItem();
  }
  delete(item: Item, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.itemsService.deleteItem(item.id);
    this.router.navigate(['/olshop']);
    console.log(item.id + ' Deleted');
  }

}
