import { Component } from '@angular/core';
interface Movie {
  title: string;
  rating: number;
  reviews: string[];
  imageUrl: string;
}

@Component({
  selector: 'app-latest-releases',
  templateUrl: './latest-releases.component.html',
  styleUrls: ['./latest-releases.component.css']
})
export class LatestReleasesComponent {
  latestMovies: Movie[] = [
    {
      title: 'Vetayan',
      rating: 4.5,
      reviews: ['Amazing storyline!', 'Great visuals and acting.'],
      imageUrl: 'assets/images/vetayan.webp'
    },
    {
      title: 'Indian 2',
      rating: 3.0,
      reviews: ['Entertaining and fun!', 'Loved the music and plot.'],
      imageUrl: 'assets/images/Indian 2.jpeg'
    },
    {
      title: 'Black',
      rating: 3.0,
      reviews: ['Entertaining and fun!', 'Loved the music and plot.'],
      imageUrl: 'assets/images/Black.jpg'
    },
    {
      title: 'Lubber Pandhu',
      rating: 5.0,
      reviews: ['Entertaining and fun!', 'Loved the music and plot.'],
      imageUrl: 'assets/images/Lubber Pandhu.jpg'
    },
    {
      title: 'amaran',
      rating: 4.9,
      reviews: ['Entertaining and fun!', 'Loved the music and plot.'],
      imageUrl: 'assets/images/amaran.jpg'
    },
    {
      title: 'aranmanai 4',
      rating: 2.5,
      reviews: ['Entertaining and fun!', 'Loved the music and plot.'],
      imageUrl: 'assets/images/aranmanai 4.avif'
    },
    // {
    //   title: 'siran',
    //   rating: 3.5,
    //   reviews: ['Entertaining and fun!', 'Loved the music and plot.'],
    //   imageUrl: 'assets/images/siran.jpg'
    // },
    {
      title: 'mark antony',
      rating: 3.9,
      reviews: ['Entertaining and fun!', 'Loved the music and plot.'],
      imageUrl: 'assets/images/mark antony.jpeg'
    },
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
