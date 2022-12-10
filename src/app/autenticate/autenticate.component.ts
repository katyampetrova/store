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
    this.authService.getProfile().subscribe({
        next: (user) => {
            this.authService.user = user;
            // console.log(user);
            this.isAuth = false;
        },
        error: (err) => {
            this.authService.user = null;
            this.isAuth = false;
        }
        
    });
    
  }

}
