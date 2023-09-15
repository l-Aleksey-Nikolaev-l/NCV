import { Component } from '@angular/core';

@Component({
  selector: 'app-top-area',
  templateUrl: './top-area.component.html',
  styleUrls: ['./top-area.component.css']
})
export class TopAreaComponent {}


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
  })
})
