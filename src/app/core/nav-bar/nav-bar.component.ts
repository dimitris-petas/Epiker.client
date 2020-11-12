import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [
  ]
})
export class NavBarComponent implements OnInit {
basket$:Observable<IBasket>
currentUser$:Observable<IUser>;

  constructor(private basketSrvice : BasketService ,private accountService : AccountService) { }

  ngOnInit(): void {
    this.basket$=this.basketSrvice.basket$;
    this.currentUser$=this.accountService.currentUser$;
  }

  logout() {
    this.accountService.logout();
  }

}
