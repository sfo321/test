import {OnInit, Component, ChangeDetectorRef} from '@angular/core';
import {CommonService} from '../../common/common.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  images: any[];
  todos: any[];
  allDone = false;
  user: any;
  date: string;

  constructor(private service: CommonService,
              private ref: ChangeDetectorRef) {

    this.date = new Date().toISOString().substring(0, 10);
    this.user = this.service.getUser();

    this.todos = [
      {todo: 'Milk the cow', deadline: '2021-02-20', done: false},
      {todo: 'Feed the cow', deadline: '2021-02-21', done: false},
      {todo: 'Check email', deadline: '2021-02-08', done: false},
      {todo: 'Repair the car', deadline: '2021-02-09', done: true},
      {todo: 'Call Baj Pesho', deadline: '2021-02-08', done: false},
      {todo: 'Go shopping', deadline: '2021-02-10', done: false},
      {todo: 'Read newspapers', deadline: '2021-02-03', done: false},
      {todo: 'Watch movie', deadline: '2021-02-31', done: false}
    ];

    this.images = [
      {name: 'pic1', url: 'https://placeimg.com/100/100/any'},
      {name: 'pic2 ', url: 'https://placeimg.com/100/100/animals'},
      {name: 'pic3', url: 'https://placeimg.com/100/100/arch'},
      {name: 'pic4', url: 'https://placeimg.com/100/100/nature'},
      {name: 'pic5', url: 'https://placeimg.com/100/100/people'},
      {name: 'pic6', url: 'https://placeimg.com/100/100/tech'},
      {name: 'pic7', url: 'https://placeimg.com/100/100/grayscale'},
      {name: 'pic8', url: 'https://placeimg.com/100/100/sepia'},
      {name: 'pic9', url: 'https://placeimg.com/100/100/animals'},
      {name: 'pic10', url: 'https://placeimg.com/100/100/arch'},
      {name: 'pic11', url: 'https://placeimg.com/100/100/nature'},
      {name: 'pic12', url: 'https://placeimg.com/100/100/people'},
    ];
  }

  ngOnInit() {
    this.allDone = this.checkAllDone();
    this.ref.detectChanges();
  }

  checkAllDone(): boolean {
    return this.todos.every(x => x.done);
  }
}
