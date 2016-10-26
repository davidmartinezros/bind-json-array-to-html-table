import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ReturnsJsonArrayService } from './returns-json-array.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ReturnsJsonArrayService]
})
export class AppComponent {
  
  title = 'app works!';

  data: Observable<Array<any>>;

  constructor(private service: ReturnsJsonArrayService) {
    this.data = service.getPeople();
    console.log("AppComponent.data:" + this.data);
  }

}
