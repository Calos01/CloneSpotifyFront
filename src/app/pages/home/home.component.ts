import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  cardsMusics:any[]=[{
    
    title:"hOLAgfffffffffff2",
    content:"ghh"
  },
  {
    
    title:"HOLA3",
    content:"dasd"
  },
  {
   
    title:"HOLA4",
    content:"ddsf"
  }]
  ngOnInit(): void {

  }

}
