import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
	captionAbout: string = 'Hi, My name is Aleksey Nikolaev';
	titleAbout: string = 'I\'m a software engineer with 8 years’ experience ' +
		'in programming industry. I\'m looking for a web developer position ' +
		'in a modern company with possibilities of self-development and ' +
		'dive deeper to this field. I have a modern frontend development ' +
		'skills stack and solid knowledge of common design patterns. ' +
		'Moreover, my ability to self-education and self-organization ' +
		'allow me to work just as well on team projects as on my own.';
}
