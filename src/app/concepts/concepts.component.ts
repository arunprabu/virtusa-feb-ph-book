import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit, AfterViewInit  {

  @ViewChild(CebComponent) cebData;

  //Todo: Try @ViewChildren() 

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log(this.cebData);
  }

  //custom event listener
  onFindLastVisitHandler(data){ //receive data
    console.log(data);
  }
}
