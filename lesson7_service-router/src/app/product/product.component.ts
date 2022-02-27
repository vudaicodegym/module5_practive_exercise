import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../model/model";
import {ProductServiceService} from "../../service/product-service.service";

import {AngularFireStorage} from "@angular/fire/compat/storage";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList : Product[] = []

  formCreate!:FormGroup;
  constructor(private productService: ProductServiceService, private  storage: AngularFireStorage) {
    this.productList = productService.productList;
  }
  product: Product = new Product(0,"", "", 0,"","",0,"")


  ngOnInit(): void {
    this.formCreate = new FormGroup({
      id: new FormControl(null, Validators.required),
      name: new FormControl('', Validators.minLength(2)),
      color: new FormControl(),
      price: new FormControl(null, Validators.min(0)),
      category: new FormControl(),
      brand: new FormControl(),
      quantity: new FormControl(),
      img: new FormControl()
    })
  }
  showEdit(product: Product){
    this.product = product;
  }
 createProduct(){
    this.productService
 }
}
