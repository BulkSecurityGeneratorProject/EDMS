import { JhiAlertService } from 'ng-jhipster';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { APP_ALERT, STRING } from 'app/app.constants';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
  constructor(private alertService: JhiAlertService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            const arr = event.headers.keys();
            let alert = null;
            arr.forEach(entry => {
              if (entry.toLowerCase().endsWith(APP_ALERT)) {
                alert = event.headers.get(entry);
              }
            });
            if (alert) {
              if (typeof alert === STRING) {
                this.alertService.success(alert, null, null);
              }
            }
          }
        },
        (err: any) => {}
      )
    );
  }
}
