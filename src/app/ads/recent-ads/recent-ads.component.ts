import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IAd } from 'src/app/interfaces/ad';

@Component({
  selector: 'app-recent-ads',
  templateUrl: './recent-ads.component.html',
  styleUrls: ['./recent-ads.component.scss']
})
export class RecentAdsComponent implements OnInit {

    ads: IAd[] | null = null;
    constructor(private apiService: ApiService) { }

  
    ngOnInit(): void {
        this.apiService.loadAds(3).subscribe({
            next: (value) => {
                this.ads = value;
            },
            error: (err) => {
                // console.log(err);
            }
        })
    }

}
