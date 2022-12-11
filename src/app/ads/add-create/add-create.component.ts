import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-create',
  templateUrl: './add-create.component.html',
  styleUrls: ['./add-create.component.scss']
})
export class AddCreateComponent {

    formErrors: boolean = false;

    constructor(private apiService: ApiService, private router: Router) {}

    createHandler(form: NgForm): void {
        if(form.invalid) {
            this.formErrors = true;
            return;
        }
        const {title, description, price, img, tel, city } = form.value;

        // console.log(title, description, img, tel, price, city);

        this.apiService.createAd(title, description, price, img, tel, city)
        .subscribe(() => {
            this.router.navigate(['/']);
        });
    }

    

}
