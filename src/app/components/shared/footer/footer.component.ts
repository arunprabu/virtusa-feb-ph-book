import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center bg-light">
      <hr>
      <app-nav>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-nav>
      <p>Contact Manager App built in Training in 2018</p>
      <p class="blue">Copyright &copy; 2018</p>
    </footer>
  `,
  styles: [ `
    .blue{
      color: blue;
    }

  `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
