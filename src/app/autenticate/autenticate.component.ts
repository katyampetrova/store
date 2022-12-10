import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-autenticate',
  templateUrl: './autenticate.component.html',
  styleUrls: ['./autenticate.component.scss']
})
export class AutenticateComponent implements OnInit {

    isAuth = true;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log('this.isAuth');
    this.authService.getProfile().subscribe({
        next: (user) => {
            console.log('innext');
            this.authService.user = user;
            console.log(user);
            this.isAuth = false;
        },
        error: (err) => {
            console.log('inerr')
            this.authService.user = null;
            this.isAuth = false;
        }
        
    });
    
  }

}
