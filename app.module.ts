import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WorkexpComponent } from './about/workexp/workexp.component';
import { ProfileComponent } from './about/profile/profile.component';
import { WorexpdetailsComponent } from './about/workexp/worexpdetails/worexpdetails.component';
import { ContactComponent } from './contact/contact.component';
import { ContactSubmitComponent } from './contact/contact-submit/contact-submit.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InterestsComponent } from './interests/interests.component';
import { HobbiesDetailComponent } from './interests/hobbies-detail/hobbies-detail.component';
import { HobbiesListComponent } from './interests/hobbies-list/hobbies-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectlistComponent } from './projects/projectlist/projectlist.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WorkexpComponent,
    ProfileComponent,
    WorexpdetailsComponent,
    ContactComponent,
    ContactSubmitComponent,
    HeaderComponent,
    HomeComponent,
    InterestsComponent,
    HobbiesDetailComponent,
    HobbiesListComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    ProjectlistComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
