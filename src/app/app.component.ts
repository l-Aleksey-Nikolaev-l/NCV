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

document.addEventListener("mousemove", e => {

  let raw_x = (e.clientX - (window.innerWidth / 2)) * -0.005;
  let raw_y = (e.clientY - (window.innerHeight / 2)) * -0.01;

  Object.assign(document.documentElement, {
    style: `
    --screenWidth: ${window.innerWidth};
    --screenHeight: ${window.innerHeight};
    --mouse_x: ${raw_x}deg;
    --mouse_y: ${raw_y}deg;
    `
  });
});
