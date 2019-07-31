import {map} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private h: HttpClient) {
  }

  static getHeaders() {
    const httpOptionConstant = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true',
      })
    };
    return httpOptionConstant;
  }

  getDevicesStatus() {
    return this.h.get<any>('https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/books', UserService.getHeaders())
      .pipe(
        map(data => data)
      );
  }
}
