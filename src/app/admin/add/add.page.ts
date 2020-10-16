import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ItemsService} from '../../olshop/items.service';
import {Item} from '../../olshop/items.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  form: FormGroup;
  check = new FormControl('');
  constructor(
      private itemsService: ItemsService,
      private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
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

  add() {
    const id = 'item' + this.itemsService.totalItem();
    console.log(id);
    this.form.value.id = id;
    console.log(this.form.value.jenis);
    const x = this.form.value;
    if (this.check.value === 'gpu'){
      this.itemsService.addGpu(x.id, x.imageUrl, x.merk, x.model, x.stok, x.harga);
      this.router.navigate(['/admin']);
      console.log('GPUUUU');
    }
    else if (this.check.value === 'ram') {
      this.itemsService.addRam(x.id, x.imageUrl, x.merk, x.model, x.stok, x.harga, x.speed, x.ukuran);
      this.router.navigate(['/admin']);
    }
    else if (this.check.value === 'motherboard') {
      this.itemsService.addMotherboard(x.id, x.imageUrl, x.merk, x.model, x.stok, x.harga, x.chipset, x.merk_processor);
      this.router.navigate(['/admin']);
    }
    else if (this.check.value === 'cpu') {
      this.itemsService.addCpu(x.id, x.imageUrl, x.merk, x.model, x.stok, x.harga, x.base_clock,
          x.boost_clock, x.jumlah_core, x.jumlah_thread);
      this.router.navigate(['/admin']);
    }
  }

}
