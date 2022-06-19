import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Popular } from './Types/Movie';
import { Observable } from 'rxjs';
import { TypeToFetch } from './type-to-fetch';
import { LocaleEnum } from './locale-enum';
@Injectable({
  providedIn: 'root',
})
export class FetchMovieService {
  base_url = 'https://a.willytec.workers.dev/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  getPopular(): Observable<Popular> {
    return this.http.get<Popular>(
      'https://a.willytec.workers.dev/movie/popular/',
      this.httpOptions
    );
  }
  getTopRated(): Observable<Popular> {
    return this.http.get<Popular>(
      'https://a.willytec.workers.dev/movie/top_rated/',
      this.httpOptions
    );
  }
  getData({
    type = TypeToFetch.popular,
    page = 1,
    locale = LocaleEnum.fr,
  }: {
    type?: TypeToFetch;
    page: number;
    locale?: LocaleEnum;
  }): Observable<Popular> {
    const target_url = new URL(this.base_url);
    target_url.pathname = `3/movie/${type}`;
    target_url.searchParams.set('page', String(page));
    return this.http.get<Popular>(target_url.href, this.httpOptions);
  }
  getLittleImagePath() {
    return 'https://image.tmdb.org/t/p/w154';
  }
  getImagePath() {
    return 'https://image.tmdb.org/t/p/w500';
  }
}

const mockedConfig = {
  images: {
    base_url: 'http://image.tmdb.org/t/p/',
    secure_base_url: 'https://image.tmdb.org/t/p/',
    backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
    logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
    poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
    profile_sizes: ['w45', 'w185', 'h632', 'original'],
    still_sizes: ['w92', 'w185', 'w300', 'original'],
  },
  change_keys: [
    'adult',
    'air_date',
    'also_known_as',
    'alternative_titles',
    'biography',
    'birthday',
    'budget',
    'cast',
    'certifications',
    'character_names',
    'created_by',
    'crew',
    'deathday',
    'episode',
    'episode_number',
    'episode_run_time',
    'freebase_id',
    'freebase_mid',
    'general',
    'genres',
    'guest_stars',
    'homepage',
    'images',
    'imdb_id',
    'languages',
    'name',
    'network',
    'origin_country',
    'original_name',
    'original_title',
    'overview',
    'parts',
    'place_of_birth',
    'plot_keywords',
    'production_code',
    'production_companies',
    'production_countries',
    'releases',
    'revenue',
    'runtime',
    'season',
    'season_number',
    'season_regular',
    'spoken_languages',
    'status',
    'tagline',
    'title',
    'translations',
    'tvdb_id',
    'tvrage_id',
    'type',
    'video',
    'videos',
  ],
};
// TODO Use new URL instead of .... strange thing
