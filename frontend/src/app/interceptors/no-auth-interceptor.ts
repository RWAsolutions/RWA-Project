import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError } from "rxjs";

export function noAuthenticationInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

  const router = inject(Router);

  return next(req).pipe(catchError(err => {
    if (err.status === 401) {
      router.navigate(['/login2']);
    }
    throw err;
  }));
}




