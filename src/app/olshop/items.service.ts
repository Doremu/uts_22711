import { Injectable } from '@angular/core';
import {Ram} from './ram.model';
import {Gpu} from './gpu.model';
import {Item} from './items.model';
import {FormGroup, NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private items: Item[] = [
    {
      id: 'item1',
      jenis: 'RAM',
      merk: 'Samsung',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/19/766417/766417_107fbeb3-ed7b-4dfa-94bb-7c1cadb0b48e_1080_1080.jpg',
      model: 'DDR4 PC2666',
      speed: 1200,
      ukuran: 8,
      harga: 600000,
      stok: 10
    },
    {
      id: 'item2',
      merk: 'Samsung',
      jenis: 'RAM',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/16/861065350/861065350_2f789ff9-8b93-4013-a866-5f6887187118_837_837.jpg',
      model: 'DDR3 PC3L',
      speed: 500,
      ukuran: 8,
      harga: 445000,
      stok: 20
    },
    {
      id: 'item3',
      merk: 'Nvidia',
      jenis: 'GPU',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/10/4/34697898/34697898_33475ad5-e4fd-4d76-a119-e298ed36a35c_700_700.jpg',
      model: 'Quadro P4000',
      harga: 22725000,
      stok: 15
    },
    {
      id: 'item4',
      jenis: 'GPU',
      merk: 'MSI',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/4/27/34786/34786_a1db4233-8381-4b03-9139-632c28f70eb9_1500_1125.jpg',
      model: 'RTX 2080 Ti',
      harga: 25000000,
      stok: 15
    },
    {
      id: 'item5',
      jenis: 'GPU',
      merk: 'Nvidia',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/8/5/3525669/3525669_e2d31c86-0587-4fb0-9d20-7adc86b14ac4_800_800',
      model: 'Geforce GT710',
      harga: 510000,
      stok: 0
    },
    {
      id: 'item6',
      jenis: 'CPU',
      merk: 'Intel',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41i%2BsZeH71L._AC_UL474_SR474,450_.jpg',
      model: 'I5',
      harga: 1500000,
      stok: 3,
      base_clock: 2.6,
      boost_clock: 4,
      jumlah_core: 4,
      jumlah_thread: 8
    },
    {
      id: 'item7',
      jenis: 'Motherboard',
      merk: 'Asus',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/2/26/14100407/14100407_8f2f0ecb-98d8-4e89-9f7c-d1dd9e45e48e_2048_2048.jpg',
      model: 'EX-B250 V7',
      harga: 1600000,
      stok: 1,
      chipset: 'ABC',
      merk_processor: 'Intel'
    },
  ];
  constructor() { }
  getAllItem(){
    return [...this.items];
  }
  getItem(itemId: string){
    return {...this.items.find(items => {
        return items.id === itemId;
      })};
  }
  totalItem() {
    return this.items.length + 1;
  }
  deleteItem(itemId: string) {
    this.items = this.items.filter(item => {
      return item.id !== itemId;
    });
  }

  addGpu(idBarang: string, imageBarang: string, merkBarang: string, modelBarang: string, stokBarang: number, hargaBarang: number){
    this.items.push({
      id: idBarang,
      imageUrl: imageBarang,
      jenis: 'GPU',
      merk: merkBarang,
      model: modelBarang,
      harga: hargaBarang,
      stok: stokBarang
    });
  }
  addRam(idBarang: string, imageBarang: string, merkBarang: string,
         modelBarang: string, stokBarang: number, hargaBarang: number, speedBarang: number,
         ukuranBarang: number){
    this.items.push({
      id: idBarang,
      imageUrl: imageBarang,
      jenis: 'GPU',
      merk: merkBarang,
      model: modelBarang,
      harga: hargaBarang,
      stok: stokBarang,
      speed: speedBarang,
      ukuran: ukuranBarang
    });
  }
  addMotherboard(idBarang: string, imageBarang: string, merkBarang: string, modelBarang: string,
                 stokBarang: number, hargaBarang: number, chipsetBarang: string, processorBarang: string){
    this.items.push({
      id: idBarang,
      imageUrl: imageBarang,
      jenis: 'GPU',
      merk: merkBarang,
      model: modelBarang,
      harga: hargaBarang,
      stok: stokBarang,
      chipset: chipsetBarang,
      merk_processor: processorBarang
    });
  }
  addCpu(idBarang: string, imageBarang: string, merkBarang: string,
         modelBarang: string, stokBarang: number, hargaBarang: number, baseBarang: number,
         boostBarang: number, coreBarang: number, threadBarang: number){
    this.items.push({
      id: idBarang,
      imageUrl: imageBarang,
      jenis: 'GPU',
      merk: merkBarang,
      model: modelBarang,
      harga: hargaBarang,
      stok: stokBarang,
      base_clock: baseBarang,
      boost_clock: boostBarang,
      jumlah_core: coreBarang,
      jumlah_thread: threadBarang
    });
  }
}
