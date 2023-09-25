import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-deatails',
  templateUrl: './product-deatails.component.html',
  styleUrls: ['./product-deatails.component.css'],
})
export class ProductDeatailsComponent implements OnInit {
  productId: Iproduct[] | any;
  product: Iproduct[] | any;
  removeProduct: Iproduct[] | any;
  constructor(
    private _activeRoute: ActivatedRoute,
    private productService: ProductService,
    private _removeProduct: ProductService
  ) {}
  ngOnInit(): void {
    console.log(this._activeRoute.snapshot.params['id']);
    this.productId = this._activeRoute.snapshot.params['id']; //get Id
    // this.productService.getProductId(this.productId)
    this.product = this.productService.getProductId(this.productId); //get product

    // this.removeProduct= this._removeProduct.RemoveItem(this.productId)
  }
}
