import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() min: number = 1;
  @Input() max: number = 1;
  @Input() current: number = 1;
  pagination: { index: number; path: string }[] = [];
  next_path?: string;
  previous_path?: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.makePagination();
  }
  makeUrl(index: number) {
    let path = this.route.snapshot.routeConfig
      ? this.route.snapshot.routeConfig.path
      : '/list';
    let query = this.route.snapshot.queryParams;
    let strArr = [];
    Object.keys(query).map((name) => {
      if (name !== 'page') strArr.push(`${name}=${query[name]}`);
    });
    strArr.push(`page=${index}`);
    return path + '?' + strArr.join('&');
  }
  makePagination() {
    let cursor = 2;
    let skip = this.current - cursor;

    if (this.max > 500) {
      this.max = 500; // API error if more than 500 pages
    }
    if (this.current > this.max) {
      this.current = this.max;
    }
    if (this.current < this.min) {
      this.current = this.min;
    }
    if (this.min + cursor < this.current && cursor * 2 > this.min) {
      this.pagination.push({ index: 0, path: 'empty' });
    }
    if (skip < cursor) {
      skip = this.min;
    }
    if (skip >= this.max - cursor - 1) {
      skip = this.max - cursor * 2;
    }
    for (let i = skip; i <= skip + cursor * 2; i++) {
      this.pagination.push({ index: i, path: this.makeUrl(i) });
    }
    if (this.current < this.max - cursor && cursor * 2 + 1 < this.max) {
      this.pagination.push({ index: 0, path: 'empty' });
    }
    this.previous_path = this.makeUrl(this.current - 1);
    this.next_path = this.makeUrl(this.current + 1);
  }
}

// TODO Seem's good, but maybe add last and first page ?
