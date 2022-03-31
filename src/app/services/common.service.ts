import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('token') || '{}')
    );
    this.user = this.userSubject.asObservable();
  }
  public get userValue() {
    return this.userSubject.value;
  }
  public getLogin(userName: string, password: string): Observable<any> {
    const data = {
      email: userName,
      password: password,
    };
    return this.http.post(environment.apiUrl + 'user_sessions/login', data).pipe(
      map((result: any) => {
        if (result.success) {
          localStorage.setItem('token', JSON.stringify(result.data.token));
          return result;
        }
      })
    );
  }
  public logout() {
    localStorage.removeItem('token');
    this.userSubject.next(null);
    this.router.navigate(['']);
  }

  public getCounsellingsList(){
    return this.http.get(environment.apiUrl + 'allotments/counsellings');
  }
}
