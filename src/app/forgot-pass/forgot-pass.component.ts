import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../servic/authentication.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  email:string=''

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    AOS.init();
  }
  forgotPass(){
    this.auth.forgotPassword(this.email);
    this.email=""
  }

}
