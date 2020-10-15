import { Component, OnInit } from '@angular/core';
import {ItemsService} from './items.service';
import {Item} from './items.model';

@Component({
  selector: 'app-olshop',
  templateUrl: './olshop.page.html',
  styleUrls: ['./olshop.page.scss'],
})
export class OlshopPage implements OnInit {
  items: Item[];
  mode: boolean;
  total: number;
  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.mode = false;
  }

  afterslidesLoad(slides) {
    slides.startAutoplay();
  }

  ionViewWillEnter(){
    this.items = this.itemsService.getAllItem();
    this.total = this.items.length;
    console.log('total : ' + this.total);
  }

  gantiMode() {
    if (this.mode === true) { this.mode = false; }
    else { this.mode = true; }
  }

}
