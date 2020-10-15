export interface Item {
    id: string;
    jenis: string;
    imageUrl: string;
    merk: string;
    model: string;
    harga: number;
    stok: number;
//    Masing masing item
//    CPU
    base_clock?: number;
    boost_clock?: number;
    jumlah_core?: number;
    jumlah_thread?: number;

//    RAM
    speed?: number;
    ukuran?: number;

//    Motherboard
    chipset?: string;
    merk_processor?: string;
}
