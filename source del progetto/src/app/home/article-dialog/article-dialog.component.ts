import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-article-dialog',
  templateUrl: './article-dialog.component.html',
  styleUrls: ['./article-dialog.component.scss']
})
export class ArticleDialogComponent implements OnInit {
title!:string;
author!:string;
content!:string;
urlToImage!:string;
  constructor(private HomeService: HomeService) { }

  ngOnInit(): void {
   this.title = this.HomeService.titles();
   this.author = this.HomeService.authors();
   this.content = this.HomeService.contents();
   this.urlToImage = this.HomeService.urlToImages();
  }

}
