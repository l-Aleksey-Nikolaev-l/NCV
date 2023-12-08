import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopAreaComponent } from './top-area/top-area.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ContactsComponent } from './contacts/contacts.component';
import {FormsModule} from "@angular/forms";
import { ProjectComponent } from './projects/project/project.component';
import { JobComponent } from './experience/job/job.component';
import { DegreeComponent } from './education/degree/degree.component';
import { CertificationComponent } from './education/certification/certification.component';
import { HobbyComponent } from './hobbies/hobby/hobby.component';

@NgModule({
  declarations: [
    AppComponent,
    TopAreaComponent,
    NavigationComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    HobbiesComponent,
    ContactsComponent,
    ProjectComponent,
    JobComponent,
    DegreeComponent,
    CertificationComponent,
    HobbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
