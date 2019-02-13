import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {

  dateOfLastVisit: any; 
  //// step 1: creating custom event in the name of findLastVisit
  @Output() findLastVisit = new EventEmitter<string>();


   // For @ViewChild implementation
  featureName: string = "Custom Evt Binding";

  constructor() { 
    console.log("Inside constructor");
    this.dateOfLastVisit = new Date();
  }

  ngOnInit() {
    console.log("Inside ngOnInit");
    //Step 2: Emit the event 
    this.findLastVisit.emit(this.dateOfLastVisit);
  }

}
