import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Iproduct[] = [];
  productnumber: any;
  productId: any;
  // productsArray: Iproduct[] = ProductsList;

  constructor(
    private _productService: ProductService,
    private productNumber: ProductService
  ) {}

  ngOnInit(): void {
    this.products = this._productService.getAllProducts();
  }

  deleteItem(id: any) {
    console.log('fuck');

    this.productNumber.RemoveItem(id);
  }
}
