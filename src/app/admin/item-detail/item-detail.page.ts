import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemsService} from '../../olshop/items.service';
import {Item} from '../../olshop/items.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertController, IonItemSliding} from '@ionic/angular';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  loadedItem: Item;
  form: FormGroup;
  constructor(
      private activatedRoute: ActivatedRoute,
      private itemService: ItemsService,
      private router: Router,
      private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('itemId')) {return; }
      const itemId = paramMap.get('itemId');
      this.loadedItem = this.itemService.getItem(itemId);
    });

    this.form = new FormGroup({
      id: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      imageUrl: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      jenis: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      merk: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stok: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      harga: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      base_clock: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      boost_clock: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      jumlah_core: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      jumlah_thread: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      speed: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      ukuran: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      chipset: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      merk_processor: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }

  edit() {
    // this.itemService.
    const x = this.form.value;
    if (this.loadedItem.jenis === 'GPU') {
      this.itemService.editGpu(x.id, x.imageUrl, x.merk, x.model, x.stok, x.harga);
    }
    else if (this.loadedItem.jenis === 'RAM') {
      this.itemService.editRam(x.id, x.imageUrl, x.merk, x.model, x.stok, x.harga, x.speed, x.ukuran);
    }
    else if (this.loadedItem.jenis === 'Motherboard') {
      this.itemService.editMotherboard(x.id, x.imageUrl, x.merk, x.model, x.stok, x.harga, x.chipset, x.merk_processor);
    }
    else if (this.loadedItem.jenis === 'CPU') {
      this.itemService.editCpu(x.id, x.imageUrl, x.merk, x.model, x.stok, x.harga, x.base_clock,
          x.boost_clock, x.jumlah_core, x.jumlah_thread);
    }
    this.router.navigate(['/admin']);
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: '<strong>Do you really want to edit this item?</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Delete',
          handler: () => {
            this.edit();
          }
        }
      ]
    });

    await alert.present();
  }
}
