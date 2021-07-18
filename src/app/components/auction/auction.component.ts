import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {
  @Input() auction: any;
 

  constructor() { }

  ngOnInit(): void {
   
  }

}
