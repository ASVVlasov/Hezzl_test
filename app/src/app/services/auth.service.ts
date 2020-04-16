import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<UserModel>;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('User')));
  }

  get currentUser(): UserModel {
    return this.currentUserSubject.value;
  }

  login(userName: string, password: string): Observable<any> {
    return this.httpClient.post(`http://localhost:4200/auth/login`, { userName, password })
      .pipe(
        tap((user: UserModel) => {
          localStorage.setItem('User', JSON.stringify(user));
          this.currentUserSubject.next(user);
        })
      );
  }

  registration(body: {any}): Observable<any> {
    return this.httpClient.post(`http://localhost:4200/auth/registration`, body)
      .pipe(
        tap((user: UserModel) => {
          localStorage.setItem('User', JSON.stringify(user));
          this.currentUserSubject.next(user);
        })
      );
  }
}
