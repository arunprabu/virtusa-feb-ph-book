import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { SearchComponent } from './components/shared/header/search.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { SiComponent } from './components/concepts/si/si.component';
import { PbComponent } from './components/concepts/pb/pb.component';
import { EbComponent } from './components/concepts/eb/eb.component';
import { TwbComponent } from './components/concepts/twb/twb.component';
import { CpbComponent } from './components/concepts/cpb/cpb.component';
import { CebComponent } from './components/concepts/ceb/ceb.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactService } from './services/contact.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';


//setting up routes
const APP_ROUTES: Routes = [
  { path:'', component: ConceptsComponent  },
  { path:'concepts', component: ConceptsComponent  },
  { path:'contacts', component: ContactsComponent  },
  { path:'contacts/new', component: AddContactComponent, canActivate: [ AuthGuard]  },
  { path:'contacts/:id', component: ContactDetailsComponent  },
  { path:'about', component: AboutComponent  },
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
    AddContactComponent,
    AboutComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ContactService,
    AuthGuard
  ],
  bootstrap: [AppComponent] // Step3: Module should be bootstrapped with a component 
})
export class AppModule { }
