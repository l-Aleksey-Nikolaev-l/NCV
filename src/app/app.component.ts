import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NCV';

  top_area: string = "top_area";
  about_me: string = "about_me";
  projects: string = "projects";
  skills: string = "skills";
  experience: string = "experience";
  education: string = "education";
  hobby: string = "hobby";
  contacts: string = "contacts";

  ngOnInit() {}

}
