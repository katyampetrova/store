import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private router: Router, private authService: AuthService) { }

  authErr: boolean = false;
  authErrMessage: string = '';


  registerHandler(form: NgForm): void {
    // console.log(form);

    if (form.invalid) {
        return;
    }

    const {email, password} = form.value;
    this.authService.register(email, password)
    .subscribe({
        next: (user) => {
            this.authService.user = user;
            this.router.navigate(['/auth/login']);
        },
        error: (err) => {
            if (err.status) {
                console.log(err);
                this.authErr = true;
                this.authErrMessage = err.error.message;
            }
            
        }
    });
}

}
