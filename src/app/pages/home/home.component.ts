import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  cardsMusics:any[]=[{
    image:"assets/cardmusic/way98.png",
    title:"hOLAgfffffffffff2dssfdsf",
    content:"ghh"
  },
  {
    image:"assets/cardmusic/way98.png",
    title:"HOLA3",
    content:"dasd"
  },
  {
    image:"assets/cardmusic/way98.png",
    title:"HOLA4",
    content:"ddsf"
  }]
  ngOnInit(): void {

  }

}
