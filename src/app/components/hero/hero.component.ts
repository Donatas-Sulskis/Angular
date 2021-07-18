import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  page!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hasRoute(route: string){
    if(this.router.url === route) {
     return this.page = 'Home';
    } else {
      return this.page = 'Add Auction';
    }
  }
 

}
