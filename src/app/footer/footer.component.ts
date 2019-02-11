import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center bg-light">
    <hr>
    <app-nav></app-nav>
    <p>Contact Manager App built in Training in 2018</p>
    <p>
      <a href="#">Back to top</a>
    </p>
    <p>Copyright &copy; 2018</p>
  </footer>
  `,
  styles: [ `


  `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
