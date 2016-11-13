import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ReturnsJsonArrayService {

  constructor(private http: Http) {}

  getPeople(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

        return this.http.get('./assets/data/people.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
