import { Component } from '@angular/core';

@Component({
  selector: 'app-root',   //exposed as selector -mandatory
  templateUrl: './app.component.html',  //html  -mandatory 
  styleUrls: ['./app.component.css'] //css 
})
export class AppComponent {
  //ts 
  title = 'app';
}
