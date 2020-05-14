import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * NOTE: In a production application api keys would stored in an environment variable
 */
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': '563492ad6f91700001000001c21829798e334a7c89b61fbd4c70e1a5'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PexelPhotoService {

  constructor(private http: HttpClient) { }

  getData(search, perPage): Observable<any> {
    const url = `https://api.pexels.com/v1/search?query=${search}&per_page=${perPage}`;
    return this.http.get(url, httpOptions)
                    .pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(error.message || "APP ERROR");
  }
}
