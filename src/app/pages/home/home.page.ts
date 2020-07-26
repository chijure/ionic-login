import {Component, OnInit} from '@angular/core';
import {AppService} from "../../services/app.service";
import {UtilService} from "../../services/util.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  email: string;

  constructor(private service: AppService, private utils: UtilService, private router: Router) {
  }

  ngOnInit(): void {
    this.service.getData().subscribe((response: any) => {
      console.log(response);
      this.email = response.email;
    }, error => {
      console.error(error);
      this.utils.showWarningAlert('Error to find data user, login again please')
        .then(async () => {
          await this.router.navigate(['login']);
        })
    })
  }


}
