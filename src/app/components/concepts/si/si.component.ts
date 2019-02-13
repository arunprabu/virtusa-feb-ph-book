import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styles: []
})
export class SiComponent implements OnInit {

  //string
  featureName: string = "String Interpolation";

  exp: number = 12;
  isLoggedIn: boolean = false;
  skills: string[] = [
    'html', 'css', 'js', 'ng'
  ];

  constructor() { }

  ngOnInit() {
  }

  add(x: number, y: number): number {
    return x + y;
  }
}
