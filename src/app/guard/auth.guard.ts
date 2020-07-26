import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import {AppService} from "../services/app.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: AppService, private router: Router) {
  }

  async canActivate(route: ActivatedRouteSnapshot): Promise<any> {
    if (localStorage.getItem('uid')) {
      return true;
    } else {
      await this.router.navigate(['login']);
    }
  }
}
