import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {MatDialogModule} from '@angular/material/dialog';
import { GoogleNewsComponent } from './google-news/google-news.component';
import { ArticleDialogComponent } from './article-dialog/article-dialog.component';
import { MeteoComponent } from './meteo/meteo.component';


@NgModule({
  declarations: [
    HomeComponent,
    GoogleNewsComponent,
    ArticleDialogComponent,
    MeteoComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatDialogModule
  ]
})
export class HomeModule { }
