import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  birthday = new Date(1988, 3, 15); // April 15, 1988

  loremIpsum: string;

  contactForm = new FormGroup({ // 1. create FormGroup
    firstName: new FormControl('', Validators.required), // 2. create new FormControl for form fields
    lastName: new FormControl('', Validators.required), //3. adding validators for the form fields
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]), // 3.1 - added email validators
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])  // 3.2 password validators also added
  });
  
    //4. associate the contactForm in html's formGroup


  constructor() { 
    this.loremIpsum = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi totam quaerat aspernatur ullam repudiandae, odit omnis minus pariatur fuga! Quibusdam sapiente dolores ratione asperiores quod a labore iste tenetur.";
  }

  ngOnInit() {
  }

}
