import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Auction } from 'src/app/Auction';
import { AuctionService } from 'src/app/services/auction.service';


@Component({
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.css']
})

export class AddAuctionComponent implements OnInit {
  @Output() onAddAuction: EventEmitter<Auction> = new EventEmitter()
  image!: string;
  name!: string;
  description!: string;
  price: number = 0;
  status: string = 'Inactive'
  error!: string
  success!: string

  constructor(private auctionService: AuctionService) { }

  auctions: Auction[] = []

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.image || !this.name || !this.description) {
      this.error = 'Please fill in required fields'
      this.success = ''
      return
    }

    this.error = ''
    this.success = 'Auction successfully added'

  const newAuction = {
    image: this.image,
    title: this.name,
    description: this.description,
    price: this.price,
    status: this.status
  }  

  this.auctionService.onAddAuction(newAuction).subscribe((auction) => this.auctions.push(auction))

  this.image = ''
  this.name = ''
  this.description = ''
  }
  
}
