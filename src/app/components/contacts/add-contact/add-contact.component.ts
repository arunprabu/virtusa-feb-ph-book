import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  formSubmissionStatus: string;

  //1. connect to service 
  constructor( private contactService: ContactService) {  //dependency injection

  }

  ngOnInit() {
  }

  addContactBtnHandler(formData){
    console.log(formData);
    console.log(formData.value);


    //if(formData.valid ) 
    // ssend  it to service 
    //else
    //throw that error 

    // algo 
    //2. send the data to services 
    this.contactService.create(formData.value)
                        .subscribe( (resp) => { //3. get resp from services
                          console.log(resp);
                          //4. use binding to display it in html 
                          if(resp && resp.id){
                            this.formSubmissionStatus = "Contact has been created";
                          }else{
                            this.formSubmissionStatus = "Some error occured";
                          }

                        });
    
    



  }
}
