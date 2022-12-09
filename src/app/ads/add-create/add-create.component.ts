import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-create',
  templateUrl: './add-create.component.html',
  styleUrls: ['./add-create.component.scss']
})
export class AddCreateComponent {

    createHandler(form: NgForm): void {
        console.log(form);
        
        // this.router.navigate(['/']);
    }

}
