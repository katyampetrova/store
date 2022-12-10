import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentAdsComponent } from './recent-ads/recent-ads.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { AdsListComponent } from './ads-list/ads-list.component';
import { AddCreateComponent } from './add-create/add-create.component';
import { AdsRoutingModule } from './ads-routing.module';
import { FormsModule } from '@angular/forms';
import { ShortenPipe } from '../shared/shorten.pipe';
import { SharedModule } from '../shared/shared.module';
import { AddEditComponent } from './add-edit/add-edit.component';



@NgModule({
  declarations: [
    RecentAdsComponent,
    AdDetailsComponent,
    AdsListComponent,
    AddCreateComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    RecentAdsComponent
  ]
})
export class AdsModule { }
