
import { Component,OnInit,NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/contactus.interface';

@Component({
  selector: 'contactus-form',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactUsComponent {
  user: User = {
    name: '',
    account: {
      email: '',
      confirm: '',
      phone: '',
      question: ''
    }
  };

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }
  
}


