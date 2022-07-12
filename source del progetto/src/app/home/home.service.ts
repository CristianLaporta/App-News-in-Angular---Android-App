import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  news: any = [];
  meteo: any = [];
  title!: string;
  author!:string;
  content!:string;
  urlToImage!:string;
  
  constructor() { }


  googlefetch = fetch('https://newsapi.org/v2/top-headlines?sources=google-news-it&apiKey=264769992d584316936d7799c1315166')
    .then((response) => response.json()).then((response) => {
      this.news.push(response.articles);
    });

    meteofetch = fetch('http://api.weatherapi.com/v1/current.json?key=b4f4245b5b4f47d0ae884913221207&q=rome')
    .then((response) => response.json()).then((response) => {
      this.meteo.push(response.current);
    });

  news2() {
    return this.news;
   
  }
  meteo2() {
    return this.meteo;
   
  }
  titles() {
    return this.title;
   
  }
  authors() {
    return this.author;
   
  }
  contents() {
    return this.content;
   
  }
  urlToImages() {
    return this.urlToImage;
   
  }
}
