import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {AppService} from "../../services/app.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  error: string;
  loading: boolean;

  constructor(private service: AppService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login(value: User) {
    value.returnSecureToken = true;
    this.loading = true;
    this.service.login(value).subscribe(async (response: any) => {
      console.log(response);
      localStorage.setItem('uid', response.localId);
      this.loading = false;
      this.error = '';
      await this.router.navigate(['home']);
    }, error => {
      console.error(error);
      console.log(error.error.error);
      this.error = error.error.error.errors[0].message;
      this.loading = false;
    });
  }
}
