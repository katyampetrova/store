import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAd } from 'src/app/interfaces/ad';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent implements OnInit {

    ad: IAd | null = null;

    constructor(private activatedRoute: ActivatedRoute) { 
        // console.log(this.activatedRoute.snapshot.data?.['ad']);
        this.ad = this.activatedRoute.snapshot.data?.['ad'];
        // console.log(this.activatedRoute.snapshot.data);
    }

    ngOnInit(): void {
  }

}
