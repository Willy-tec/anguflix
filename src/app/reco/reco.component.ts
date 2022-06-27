import { Component, Input, OnInit } from '@angular/core';
import { FetchMovieService } from '../fetch-movie.service';
import { Movie } from '../Types/Movie';

@Component({
  selector: 'app-reco',
  templateUrl: './reco.component.html',
  styleUrls: ['./reco.component.scss'],
})
export class RecoComponent implements OnInit {
  @Input() movieId: number = 0;
  @Input() type: string = '';
  movies: Movie[] = [];
  constructor(private fetchService: FetchMovieService) {}

  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.fetchService
      .getRecoData({ id: this.movieId + '', type: this.type })
      .subscribe((data) => {
        this.movies = data.results;
        console.log(data);
      });
  }
}
