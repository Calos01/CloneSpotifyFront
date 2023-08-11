import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit{
  isLoginRoute: boolean = false;

  constructor(private router:Router) {
  }
  ngOnInit(): void {
    
  }
  redirectLogin(){
    this.router.navigateByUrl('/login')
  }

}
