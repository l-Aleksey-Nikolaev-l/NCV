import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
	skillList: string[] = [
		"JavaScript", "TypeScript", "Node.js", "HTML", "CSS",
		"Angular", "React", "Bootstrap", "ESLint", "Prettier",
		"GitHub", "Webpack", "NPM", "OOP", "SOLID",
		"Figma", "WebStorm", "Agile & Waterfall", "Analytical skills", "Code review"
	];
}
