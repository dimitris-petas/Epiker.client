import { Component, OnInit, Input } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent implements OnInit {
@Input() product: IProduct;

  constructor(private basketSrvice:BasketService) { }

  ngOnInit(): void {
  }

  addItemToBasket(){
    this.basketSrvice.addItemToBasket(this.product)
  }
}
