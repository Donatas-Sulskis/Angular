import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuctionComponent } from './components/add-auction/add-auction.component';
import { AuctionListComponent } from './components/auction-list/auction-list.component';

const routes: Routes = [
  { path: '', component: AuctionListComponent},
  { path: 'add', component: AddAuctionComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
