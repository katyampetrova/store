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


  registerHandler(form: NgForm): void {
    // console.log(form);

    if (form.invalid) {
        return;
    }

    const {email, password} = form.value;
    this.authService.register(email, password)
    .subscribe(user => {
        this.authService.user = user;
        this.router.navigate(['/auth/login']);
    });

}

}
