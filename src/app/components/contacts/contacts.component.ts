import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Icontact } from '../../interfaces/icontact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: Icontact[];

  constructor( private contactService: ContactService ) { //1 .connect to service 
    console.log("Inside Constructor");
  }

  ngOnInit() {
    console.log("Inside ngOnInit");
    

    //2. call the method 
    this.contactService.getContacts()
                      .subscribe( (resp) => {
                        console.log(resp);
                        this.contactList = resp;
                      });
  }

  ngOnDestroy(){
    console.log("Destory fired");

    //unsubscribe observables 
    //clear data
    ///ref: https://github.com/arunprabu/hexa-phone-book
  }


}
