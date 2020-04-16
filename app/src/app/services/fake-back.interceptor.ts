import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, mergeMap} from 'rxjs/operators';
import {UserModel} from '../models/user.model';

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0MzQ0Nzk4ODN9.HQyx15jWm1upqsrKSf89X_iP0sg7N46a9pqBVGPMYdiqZeuU_ZZOdU-zizHJoIHMIJxtEWzpSMaVubJW0AJsTqjqQf6GoJ4cmFAfmfUFXmMC4Xv5oc4UqvGizpoLjfZedd834PcwbS-WskZcL4pVNmBIGRtDXkoU1j2X1P5M_sNJ9lYZ5vITyqe4MYJovQzNdQziUNhcMI5wkXncV7XzGInBeQsPquASWVG4gb3Y--k1P3xWA4Df3rKeEQBbInDKXczvDpfIlTojx4Ch8OM8vXWWNxW-mIQrV31wRrS9XtNoig7irx8N0MzokiYKrQ8WP_ezPicHvVPIHhz-InOw";
const users: UserModel[] = [];

@Injectable({
  providedIn: 'root'
})
export class FakeBackInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = req;
    return of(null)
      .pipe(mergeMap(handleRequest))
      .pipe(delay(1000));

    function handleRequest() {
      switch (true) {
        case url.endsWith('/auth/registration') && method === 'POST':
          return registration(body);
        default:
          return next.handle(req);
      }
    }
    function registration(user: UserModel) {
      user.id = (users.length + 1).toString();
      user.token = token;
      users.push(user);
      return response(user);
    }
    function response(customBody): Observable<HttpResponse<any>> {
      return of(new HttpResponse({ status: 200, body: customBody }));
    }
  }

  constructor() { }
}
