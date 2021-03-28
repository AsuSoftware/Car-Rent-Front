import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postsTop = [
    {
      image: "./assets/img/bmw_m5.png",
      title: "Bmw M5",
      gas: "Diesel",
      year: "2020",
      km: "7.500km",
      price: "90$/day"
    },
    {
      image: "./assets/img/alfa-romeo-stelvio.png",
      title: "Alfa Romeo Stelvio",
      gas: "Diesel",
      year: "2020",
      km: "7.500km",
      price: "90$/day"
    },
    {
      image: "./assets/img/audi-r8.png",
      title: "Audi R8",
      gas: "Diesel",
      year: "2020",
      km: "7.500km",
      price: "90$/day"
    },
  ];

  postsBottom = [
    {
      image: "./assets/img/volkswagen-golf-gtd.png",
      title: "Volkswagen Golf GTD",
      gas: "Diesel",
      year: "2020",
      km: "7.500km",
      price: "90$/day"
    },
    {
      image: "./assets/img/lamborghini-hurracan.png",
      title: "Lamborghini Hurracan",
      gas: "Diesel",
      year: "2020",
      km: "7.500km",
      price: "90$/day"
    },
    {
      image: "./assets/img/tesla-model-s.png",
      title: "Tesla Model X",
      gas: "Diesel",
      year: "2020",
      km: "7.500km",
      price: "90$/day"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
