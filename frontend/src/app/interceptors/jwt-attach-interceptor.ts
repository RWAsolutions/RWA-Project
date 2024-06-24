import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function jwtAttachInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  //console.log(req.url);

  // const clonedRequest = req.clone({
  //   setHeaders: {
  //     Authorization: 'Bearer ' +
  //   }
  // });

  const token = getCookie('jwt'); // Retrieve the JWT token from the cookie

  //console.log('Token:', token);

  // Clone the request and set the new header if the token exists
  const reqWithHeader = token ? req.clone({
    headers: req.headers.set('Authorization', 'Bearer ' + token),
  }) : req;

  return next(reqWithHeader);
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) {
    return match[2];
  } else {
    return null;
  }
}


