import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CrickInfoService {

  constructor(private http: HttpClient) { }

  getUpcomingUpdate(): Observable<any> {
    return this.http.get<any>('https://rest.entitysport.com/v2/matches/?status=1&token=437214169d9be2a73e91d22f76f68b52');
  }
  getLiveUpdate(): Observable<any> {
    return this.http.get<any>('https://rest.entitysport.com/v2/matches/?status=3&token=437214169d9be2a73e91d22f76f68b52');
  }
  getResults(): Observable<any> {
    return this.http.get<any>('https://rest.entitysport.com/v2/matches/?status=2&token=437214169d9be2a73e91d22f76f68b52');
  }
}
