import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IAd } from 'src/app/interfaces/ad';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})
export class AdsListComponent implements OnInit {

    ads: IAd[] | null = null;
    constructor(private apiService: ApiService) { }

  
    ngOnInit(): void {
        this.apiService.loadAds().subscribe({
            next: (value) => {
                this.ads = value;
            },
            error: (err) => {
                // console.log(err);
                if(err.status == 401) {
                    console.log('wqdqwdjkqwhdkjhqwkjdhkj');
                }
            }
        })
    }

}
