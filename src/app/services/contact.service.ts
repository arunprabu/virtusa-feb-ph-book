import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {
  _url: string;  
  
  constructor( private http: Http, private httpClient: HttpClient ) { 
    this._url = "http://jsonplaceholder.typicode.com/users"; 
  }

  create( contactData ){ // 1. receive data from comp 
    console.log(contactData);
    //2. send the data to rest api 
    // 2.1 what's the rest api url -- this._url
    
    // 2.2 what method?  - POST
    return this.http.post(this._url, contactData)
              .map( (resp) => { //3. receive resp from rest api 
                console.log(resp);
                //4. channelise it back to component 
                return resp.json();
              });
  }

  getContacts(){
    //2. send the data to rest api 
    // 2.1 what's the rest api url -- this._url
    
    // 2.2 what method?  - POST
    return this.http.get(this._url)
              .map( (resp) => { //3. receive resp from rest api 
                console.log(resp);
                //4. channelise it back to component 
                return resp.json();
              });
  }

  getContactById( id: string ){
    this._url = "http://jsonplaceholder.typicode.com/users/" + id;
    return this.http.get(this._url)
                  .map( (resp) => { //3. receive resp from rest api 
                    console.log(resp);
                    //4. channelise it back to component 
                    return resp.json();
                  });

  }

  updateContact( contactData ){
    console.log(contactData);
    this._url = "http://jsonplaceholder.typicode.com/users/" + contactData.id;
    return this.http.put(this._url, contactData)
                    .map( (resp) => { //3. receive resp from rest api 
                      console.log(resp);
                      //4. channelise it back to component 
                      return resp.json();
                    });


  }

  deleteContactById(){
   //ToDO: 
   // this.httpClient.
  }
}
