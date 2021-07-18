import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';
import { Auction } from '../Auction';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  private apiUrl = 'https://crudcrud.com/api/73b98048610247ebab158dd303524f20/auction'

  constructor(private http:HttpClient) { }

  getAuction(): Observable<Auction> {
    return this.http.get<Auction>(this.apiUrl);
  }

  onAddAuction(auction: Auction):Observable<Auction> {
    return this.http.post<Auction>(this.apiUrl, auction, httpOptions);
  }
}


