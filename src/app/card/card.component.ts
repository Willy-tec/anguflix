import { Component, Input, OnInit } from '@angular/core';
import { FetchMovieService } from '../fetch-movie.service';
import { Movie } from '../Types/Movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private data: FetchMovieService) {}
  @Input() film: Movie = {} as Movie;
  url: string = '';
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    // this.film = this.data.getData();
    this.url = this.data.getImagePath();
  }
}
