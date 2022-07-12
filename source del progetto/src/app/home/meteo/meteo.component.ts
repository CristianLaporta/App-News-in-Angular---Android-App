import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {
meteo:any;
  constructor(private HomeService: HomeService) { }

  ngOnInit(): void {
   this.meteo = this.HomeService.meteo2()
   console.log(this.meteo)
  }

}
