import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { IAd } from 'src/app/interfaces/ad';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent{

    // constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

    // ngOnInit(): void {
    //     const id = this.route.snapshot.paramMap.get('id');
    //     console.log(id);
    // }

    ad: IAd | null = null;

    constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private router: Router) { 
        // console.log(this.activatedRoute.snapshot.data?.['ad']);
        this.ad = this.activatedRoute.snapshot.data?.['ad'];
    }



  editHandler(form: NgForm): void {
        if(form.invalid) {return;}

        const {title, description, price, img, tel, city } = form.value;

        // console.log(this.ad);

        // console.log(title, description, img, tel, price, city);

        this.apiService.updateAd(this.ad!._id, title, description, price, img, tel, city)
        .subscribe(() => {
            this.router.navigate([`/ads/details/${this.ad!._id}`]);
        });
  }

}
