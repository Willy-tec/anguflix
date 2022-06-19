import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockdataService {
  data = {
    adult: false,
    backdrop_path: '/bvpI11RJbE6lHSWCrhvNC1S1MtO.jpg',
    belongs_to_collection: {
      id: 137697,
      name: 'Le Monde de Nemo - Saga',
      poster_path: '/230W5plwjXW4ImhHKFiPnIpwt4z.jpg',
      backdrop_path: '/2hC8HHRUvwRljYKIcQDMyMbLlxz.jpg',
    },
    budget: 94000000,
    genres: [
      { id: 16, name: 'Animation' },
      { id: 10751, name: 'Familial' },
    ],
    homepage: 'http://movies.disney.com/finding-nemo',
    id: 12,
    imdb_id: 'tt0266543',
    original_language: 'en',
    original_title: 'Finding Nemo',
    overview:
      'Dans les eaux tropicales de la Grande Barrière de corail, un poisson‐clown du nom de Marin mène une existence paisible avec son fils unique, Nemo. Redoutant l’océan et ses risques imprévisibles, il fait de son mieux pour protéger son fils. Comme tous les petits poissons de son âge, celui‐ci rêve pourtant d’explorer les mystérieux récifs. Lorsque Nemo disparaît, Marin devient malgré lui le héros d’une quête unique et palpitante. Le pauvre papa ignore que son rejeton à écailles a été emmené jusque dans l’aquarium d’un dentiste. Marin ne s’engagera pas seul dans l’aventure : la jolie Dory, un poisson‐chirurgien bleu à la mémoire défaillante et au grand cœur, va se révéler d’une aide précieuse. Les deux poissons vont affronter d’innombrables dangers, mais l’optimisme de Dory va pousser Marin à surmonter toutes ses peurs.',
    popularity: 123.722,
    poster_path: '/8zR2vXoXfdlknEYjfHvCbb1rJbI.jpg',
    production_companies: [
      {
        id: 3,
        logo_path: '/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png',
        name: 'Pixar',
        origin_country: 'US',
      },
    ],
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' },
    ],
    release_date: '2003-05-30',
    revenue: 940335536,
    runtime: 101,
    spoken_languages: [
      { english_name: 'English', iso_639_1: 'en', name: 'English' },
    ],
    status: 'Released',
    tagline: '',
    title: 'Le Monde de Nemo',
    video: false,
    vote_average: 7.8,
    vote_count: 16468,
  };
  constructor() {}
  getData() {
    return this.data;
  }
  getUrlImage() {
    return 'https://image.tmdb.org/t/p/w500';
  }
}
