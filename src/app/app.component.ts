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
  let foot_cord;
  let coord_X, coord_Y;

  const lamp = document.querySelector("#lamp");
  const light = document.querySelector("#light");
  const area = document.querySelector(".footer_area");
  const centreOfLamp = getCenter(lamp);
  const centreOfLight = getCenter(light);


  function getCenter(element: any) {
    const {left, top, width, height} = element.getBoundingClientRect();
    return {x: left + width / 2, y: top + height / 2};
  }
  foot_cord = Math.atan2(e.clientY - centreOfLamp.y, e.clientX - centreOfLamp.x);

  coord_X = e.clientX - 25;
  coord_Y = e.clientY - area!.clientHeight/2;


  Object.assign(document.documentElement, {
    style: `
    --screenWidth: ${window.innerWidth};
    --screenHeight: ${window.innerHeight};
    --mouse_x: ${raw_x}deg;
    --mouse_y: ${raw_y}deg;
    --foot_cor: ${foot_cord}rad;
    --coord_x: ${coord_X}px;
    --coord_y: ${coord_Y}px;
    `
  });
});
