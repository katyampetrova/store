import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    // @ViewChild('form', {static: true}) form!: ElementRef<HTMLInputElement>;

    constructor(private router: Router, private authService: AuthService) { 
  
    }

    loginHandler(form: NgForm): void {
        // console.log(form);
        // this.authService.user = {
        //     email: 'hswq@abv.bg',
        //     password: 'john'
        // } as any;
        // this.router.navigate(['/']);

        if (form.invalid) {
            return;
        }
    
        const {email, password} = form.value;
        this.authService.login(email, password)
        .subscribe(user => {
            this.authService.user = user;
            this.router.navigate(['/']);
        });
    }

}
