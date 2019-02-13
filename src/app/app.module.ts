import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './header/search.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { SiComponent } from './concepts/si/si.component';
import { PbComponent } from './concepts/pb/pb.component';
import { EbComponent } from './concepts/eb/eb.component';
import { TwbComponent } from './concepts/twb/twb.component';
import { CpbComponent } from './concepts/cpb/cpb.component';
import { CebComponent } from './concepts/ceb/ceb.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';


//setting up routes
const APP_ROUTES: Routes = [
  { path:'', component: ConceptsComponent  },
  { path:'concepts', component: ConceptsComponent  },
  { path:'contacts', component: ContactsComponent  },
  { path:'contacts/1', component: ContactDetailsComponent  },
  { path:'contacts/new', component: AddContactComponent  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SearchComponent,
    ConceptsComponent,
    SiComponent,
    PbComponent,
    EbComponent,
    TwbComponent,
    CpbComponent,
    CebComponent,
    ContactsComponent,
    ContactDetailsComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent] // Step3: Module should be bootstrapped with a component 
})
export class AppModule { }
