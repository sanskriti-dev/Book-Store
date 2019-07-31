import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books = [];

  constructor(private s: UserService) {
  }

  ngOnInit() {
    this.s.getDevicesStatus().subscribe(value => {
        this.books = value;
    }
    );
  }

}
