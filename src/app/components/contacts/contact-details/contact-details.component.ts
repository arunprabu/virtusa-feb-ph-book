import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../../../services/contact.service';
import { Icontact } from '../../../interfaces/icontact';

declare var $: any;   //use jquery with in this component

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {

  contactId: string; 
  contactData: Icontact; 
  editableContactData: Icontact;
  formSubmissionStatus: string;

  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( (params) => {
      this.contactId = params["id"];
      console.log(params);
    });
  }

  ngOnInit() {
    this.contactService.getContactById(this.contactId)
                        .subscribe( (resp) => {
                          console.log(resp);
                          this.contactData = resp;
                        });
  }

  openEditModal(){
    //duplicating original object 
    this.editableContactData = JSON.parse(JSON.stringify(this.contactData)); 
    $('#editModal').modal('show');
  }

  onUpdateContact(){
    console.log(this.editableContactData);

    this.contactService.updateContact(this.editableContactData)
                      .subscribe( (resp) => {
                        console.log(resp);
                        this.formSubmissionStatus = "Thanks! Contact has been updated!"
                        setTimeout( () => {
                          $('#editModal').modal('hide');
                          this.contactData = resp;
                        }, 3000);                        
                      });

  }


}
