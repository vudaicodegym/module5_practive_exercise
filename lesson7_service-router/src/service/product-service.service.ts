import { Injectable } from '@angular/core';
import {Product} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
    productList: Product[] = [];

  constructor() {
    this.productList.push(new Product(1, "z1000", "green", 19000, "naked bike", "kawasaki", 15, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85vZEHbTeHD6irWeXYdxNiPKha71Uk5MPhQ&usqp=CAU" ))
    this.productList.push(new Product(2, "YZF R1", "blue", 25000, "sport bike", "yamaha", 100, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZUIhtp9Q0MHAdI1xmTXRad38gIhpMsBirig&usqp=CAU" ))
    this.productList.push(new Product(3, "panigale 1199", "red", 27000, "sport bike", "ducati", 100, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgkr3bEs7l9J_r0m6QRZiS2pJJpM2ObEhvjQ&usqp=CAU" ))
  }
create(p: Product){
  for (let i = 0; i < this.productList.length; i++) {
    console.log(i)
    if (this.productList[i].id == p.id) {
      this.productList[i] = p;
      return;
    }
  }
  this.productList.push(p)
}
delete(id: number){
  for (let i = 0; i < this.productList.length; i++) {
if (this.productList[i].id == id){
  this.productList.splice(i, 1)
  return;
}
  }
}
}
