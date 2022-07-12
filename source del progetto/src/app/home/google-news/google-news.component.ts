import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import {MatDialog} from '@angular/material/dialog';
import { ArticleDialogComponent } from '../article-dialog/article-dialog.component';


@Component({
  selector: 'app-google-news',
  templateUrl: './google-news.component.html',
  styleUrls: ['./google-news.component.scss']
})
export class GoogleNewsComponent implements OnInit {
  news:any = [];

  constructor(  private HomeService: HomeService, public dialog: MatDialog ) {}
    ngOnInit(): void {
      this.news = this.HomeService.news2();
    console.log(this.news)
    }
    openDialog() {
      const dialogRef = this.dialog.open(ArticleDialogComponent,{
        autoFocus: false,
        maxHeight: '90vh' 
  });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
    savedata(title: string, content: string, author: string, urlToImage: string){
  this.HomeService.title = title;
  this.HomeService.content = content;
  this.HomeService.author = author;
  this.HomeService.urlToImage =  urlToImage;
    }
  }





