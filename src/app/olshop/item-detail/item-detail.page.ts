import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemsService} from '../items.service';
import {Item} from '../items.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  loadedItem: Item;
  constructor(
      private activatedRoute: ActivatedRoute,
      private itemService: ItemsService,
      private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('itemId')) {return; }
      const itemId = paramMap.get('itemId');
      this.loadedItem = this.itemService.getItem(itemId);
    });
  }

}
