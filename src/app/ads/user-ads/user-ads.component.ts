import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IAd } from 'src/app/interfaces/ad';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-ads',
  templateUrl: './user-ads.component.html',
  styleUrls: ['./user-ads.component.scss']
})
export class UserAdsComponent implements OnInit {

    ads: IAd[] | null = null;
    user: IUser | null = null;

    constructor(private apiService: ApiService, private authService: AuthService) {
        this.user = this.authService.user;
    }

  
    ngOnInit(): void {
        if(this.user) {
            this.apiService.loadUserAds(this.user!._id).subscribe({
                next: (value) => {
                    this.ads = value;
                },
                error: (err) => {
                    console.log(err);
                }
            })
        }
       
    }

}
