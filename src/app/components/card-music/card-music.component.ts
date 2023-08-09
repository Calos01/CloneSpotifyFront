import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-music',
  templateUrl: './card-music.component.html',
  styleUrls: ['./card-music.component.css']
})

export class CardMusicComponent implements OnInit{
  @Input() img!:string;
  @Input() title!:string;
  @Input() content!:string;
  ngOnInit(): void {
    
  }
}
