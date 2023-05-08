import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularfirebase-student-app';

  constructor(private router: Router){}
  clickButton(path: string) {
        this.router.navigate([path]);
    }
 
}
