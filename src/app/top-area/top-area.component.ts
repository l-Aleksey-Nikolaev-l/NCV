import { Component } from '@angular/core';

@Component({
  selector: 'app-top-area',
  templateUrl: './top-area.component.html',
  styleUrls: ['./top-area.component.css']
})
export class TopAreaComponent {}

document.addEventListener("mousemove", e => {
  Object.assign(document.documentElement, {
    style: `
    --mouse_x: ${(e.clientX - (window.innerWidth / 2)) * -0.005}deg;
    --mouse_y: ${(e.clientY - (window.innerHeight / 2)) * 0.01}deg;
    `
  })
})
