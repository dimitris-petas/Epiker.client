import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule  } from 'ngx-bootstrap/pagination';
import {  CarouselModule } from 'ngx-bootstrap/carousel';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PagingHeaderComponent, PagerComponent, OrderTotalsComponent, BasketSummaryComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    CarouselModule,
    OrderTotalsComponent,
    BasketSummaryComponent
  ]
})
export class SharedModule { }
