import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentAdsComponent } from './recent-ads/recent-ads.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { AdsListComponent } from './ads-list/ads-list.component';
import { AddCreateComponent } from './add-create/add-create.component';
import { AdsRoutingModule } from './ads-routing.module';



@NgModule({
  declarations: [
    RecentAdsComponent,
    AdDetailsComponent,
    AdsListComponent,
    AddCreateComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule
  ],
  exports: [
    RecentAdsComponent
  ]
})
export class AdsModule { }
