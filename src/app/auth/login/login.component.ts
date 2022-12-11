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

    authErr: boolean = false;

    constructor(private router: Router, private authService: AuthService) { 
  
    }

    loginHandler(form: NgForm): void {

        if (form.invalid) {
            return;
        }
    
        const {email, password} = form.value;
        this.authService.login(email, password)
        .subscribe({
            next: (user) => {
            this.authService.user = user;
            this.router.navigate(['/']);
            },
            error: (err) => {
                if (err.status === 401) {
                    this.authErr = true;
                }
            }
        });
    }
}
