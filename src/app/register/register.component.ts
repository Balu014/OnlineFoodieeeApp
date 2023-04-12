import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../servic/authentication.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string='';
  password: string='';
  campaigntype: any;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    AOS.init();
  }

  register(){
    if(this.email == ''){
      alert('Please Enter Email')
      return;
    }
    if(this.password == ''){
      alert('Please Enter Email')
      return;
    }
    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }

}
