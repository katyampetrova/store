import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { 
    console.log(this.activatedRoute.snapshot.data?.['ad']);
  }

  ngOnInit(): void {
  }

}
