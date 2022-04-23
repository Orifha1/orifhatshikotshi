import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroductionComponent } from './content/introduction/introduction.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './header/navbar/navbar.component';
import { AboutComponent } from './content/about/about.component';
import { SkillsComponent } from './content/skills/skills.component';
import { ContactComponent } from './content/contact/contact.component';
import { EducationComponent } from './content/education/education.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { ProjectsComponent } from './content/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    EducationComponent,
    FooterComponent,
    ExperienceComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
