import { Component, Input, OnInit } from '@angular/core';
import { FetchMovieService } from '../fetch-movie.service';
import { Movie } from '../Types/Movie';

@Component({
  selector: 'app-minicard',
  templateUrl: './minicard.component.html',
  styleUrls: ['./minicard.component.scss'],
})
export class MinicardComponent implements OnInit {
  constructor(private http: FetchMovieService) {}
  @Input() film: Movie = {} as Movie;
  img_base_url: string = '';
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.img_base_url = this.http.getLittleImagePath();
  }
}
