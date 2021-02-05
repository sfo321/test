import {Component} from '@angular/core';
import {CommonService} from '../../common/common.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  items: any[];
  settings: any;
  user: any;

  constructor(private service: CommonService) {

    this.user = this.service.getUser();

    this.items = [
      {currency: 'USD', amount: '34544.26', date: '2020-02-04'},
      {currency: 'BGN', amount: '1785.48', date: '2020-02-03'},
      {currency: 'BGN', amount: '-58.25', date: '2020-02-02'},
      {currency: 'BGN', amount: '-875.00', date: '2020-02-01'},
      {currency: 'USD', amount: '568.11', date: '2020-01-25'},
      {currency: 'EUR', amount: '-28.18', date: '2020-01-18'},
      {currency: 'EUR', amount: '-54.45', date: '2020-01-16'},
      {currency: 'EUR', amount: '-71.55', date: '2020-01-15'},
      {currency: 'BGN', amount: '27.88', date: '2020-01-05'},
      {currency: 'BGN', amount: '352.99', date: '2020-01-02'},
      {currency: 'USD', amount: '-94.25', date: '2020-01-01'},
    ];

    this.settings = {
      mail: true,
      phone: false,
      message: false
    };
  }
}
