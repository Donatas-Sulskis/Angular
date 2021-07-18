import { Component, OnInit } from '@angular/core';
import { AuctionService } from 'src/app/services/auction.service';
import { Auction } from 'src/app/Auction';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent implements OnInit {
  auctions: Auction[] = [];

  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
    this.auctionService.getAuction().subscribe((auctions: any) => (this.auctions = auctions));
  }
}
