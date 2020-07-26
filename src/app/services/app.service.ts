import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = 'https://identitytoolkit.googleapis.com/v1/accounts:'

  constructor(private http: HttpClient) {
  }

  login(data) {
    return this.http.post(this.url + 'signInWithPassword?key=' + environment.firebaseId, data)
      .pipe(map(results => results));
  }

  register(data) {
    return this.http.post(this.url + 'signUp?key=' + environment.firebaseId, data)
      .pipe(map(results => results));
  }

  getData() {
    const data = {
      idToken: localStorage.getItem('uid')
    };

    return this.http.post(this.url + 'lookup?key=' + environment.firebaseId, data)
      .pipe(map(results => results));


  }
}
