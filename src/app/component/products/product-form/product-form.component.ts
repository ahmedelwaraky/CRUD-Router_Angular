import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ProductsList } from '../../../models/productsLists';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productId: any;
  product: any;

  constructor(
    private router: Router,
    private activateroute: ActivatedRoute,
    private productservice: ProductService
  ) {}
  //form group
  productForm = new FormGroup({
    productName: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl(),
  });

  get getProductName() {
    return this.productForm.controls['productName'];
  }
  get getProductPrice() {
    return this.productForm.controls['price'];
  }
  get getProductQuantity() {
    return this.productForm.controls['quantity'];
  }

  ngOnInit(): void {
    this.productId = this.activateroute.snapshot.params['id'];
    if (this.productId) {
      this.product = this.productservice.getProductId(this.productId);
    }
    this.getProductName.setValue(this.product.productName);
    this.getProductPrice.setValue(this.product.price);
    this.getProductQuantity.setValue(this.product.quantity);
  }

  formOperation(e: Event, pId: any) {
    e.preventDefault();
    console.log(this.productForm.value);

    // server
    // add new Product (from.value)

    if (pId == 0) this.addProduct();
    else this.updateProduct(pId);
    this.router.navigate(['/products']); // Use navigate instead of navigator
  }

  addProduct() {
    this.productservice.addNewProduct({
      id: ProductsList[ProductsList.length - 1].id + 1,
      ...this.productForm.value,
    });
  }

  updateProduct(pId:number) {
    this.productservice.editProduct(pId,this.productForm.value);
  }
}
