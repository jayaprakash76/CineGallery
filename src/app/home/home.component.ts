import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovies: { name: string; cover: string; }[] = []; // Declare the type of trendingMovies

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTrendingMovies();
  }

  getTrendingMovies() {
    this.http.get<{ name: string; cover: string; }[]>('http://localhost:61603/assets/data/trending-movies.json')
      .subscribe(
        (movies) => {
          this.trendingMovies = movies;
          console.log(this.trendingMovies);
        },
        (error) => {
          console.error('Error fetching movies:', error);
          // Fallback data in case of an error
          this.trendingMovies = [
            { name: 'aram', cover: 'aram.jpg' },
            { name: 'goat', cover: 'goat.jpg' },
            { name: 'hero', cover: 'hero.jpeg' },
            { name: 'Imaika Nodigal', cover: 'imaika nodiga.jpg' },
            { name: 'maharaja', cover: 'maharaja.jpeg' },
            { name: 'mersal', cover: 'mersal.jpeg' },
            { name: 'super delux', cover: 'super delux.webp' },
            { name: 'sulthan', cover: 'sulthan.jpeg' },
            { name: 'viduthalai', cover: 'viduthalai.jpg' },
            { name: 'vikram', cover: 'vikram.webp' },
            { name: 'kanguva', cover: '230681-Kan.jpeg' },
            { name: 'soorarai pottru', cover: 'soorarai pottru.jpg' },
            { name: 'Indian 2', cover: 'Indian 2.jpeg' },
            { name: 'mahaan', cover: 'mahaan.jpg' },
            { name: 'bahubali', cover: 'bahubali.jpeg' },
            { name: 'maaveeran', cover: 'maaveeran.jpg' },
            { name: 'penguin', cover: 'penguin.webp' },
            { name: 'vetayan', cover: 'vetayan.webp' },
          ];
        }
      );
  }
}
