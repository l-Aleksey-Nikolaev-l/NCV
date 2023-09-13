import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private appComponent:AppComponent) {}

  top_area: string = "#" + this.appComponent.top_area;
  about_me: string = "#" + this.appComponent.about_me;
  projects: string = "#" + this.appComponent.projects;
  skills: string = "#" + this.appComponent.skills;
  experience: string = "#" + this.appComponent.experience;
  education: string = "#" + this.appComponent.education;
  hobby: string = "#" + this.appComponent.hobby;
  contacts:string = "#" + this.appComponent.contacts;

  checked:boolean = false;

  ngOnInit() {}

  clicked() {
    this.checked = !this.checked;
  }

}
