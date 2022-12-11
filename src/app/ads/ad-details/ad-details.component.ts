import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IAd } from 'src/app/interfaces/ad';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent implements OnInit {

    ad: IAd | null = null;
    user: IUser | null = null;
    isOwner: boolean = false;

    constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private router: Router, private authService: AuthService) { 
        this.ad = this.activatedRoute.snapshot.data?.['ad'];
        this.user = this.authService.user;

        // console.log(this.ad);
        // console.log(this.user);

        if (this.ad?._ownerId == this.user?._id) {
            this.isOwner = true;
        }
    }

    ngOnInit(): void {
        
    }

    delete() {
        this.apiService.deleteAd(this.ad!._id) .subscribe(() => {
            this.router.navigate(['/ads/list/']);
        });
    }
}
