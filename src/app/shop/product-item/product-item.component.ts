import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent implements OnInit {
@Input() product: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
