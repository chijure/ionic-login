import {Component, OnInit} from '@angular/core';
import {AppService} from "../../services/app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string;
  password: string;
  error: string;
  loading: boolean;

  constructor(private service: AppService, private router: Router) {
  }

  ngOnInit() {
  }

  signUp(value: any) {
    this.loading = true;
    value.returnSecureToken = true;
    this.service.register(value).subscribe(async (response: any) => {
      console.log(response);
      localStorage.setItem('uid', response.localId);
      this.loading = false;
      await this.router.navigate(['home']);
    }, error => {
      console.error(error);
      this.loading = false;
      this.error = error.error.error.errors[0].message;
    });
  }
}
