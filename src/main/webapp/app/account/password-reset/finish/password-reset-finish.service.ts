import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL, API_ACCOUNT_RESET_PASSWORD_FINISH } from 'app/app.constants';

@Injectable({ providedIn: 'root' })
export class PasswordResetFinishService {
  constructor(private http: HttpClient) {}

  save(keyAndPassword: any): Observable<any> {
    return this.http.post(SERVER_API_URL + API_ACCOUNT_RESET_PASSWORD_FINISH, keyAndPassword);
  }
}
