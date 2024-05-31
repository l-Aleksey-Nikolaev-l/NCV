import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillList:string[] = ["Angular", "React", "Bootstrap", "HTML", "CSS",
                        "JavaScript", "TypeScript", "C#", ".NET", "Node.js",
                        "GitHub", "SOLID", "Clean Code", "Agile & Waterfall", "Analytical skills",
                        "Creating new solutions", "Problem solving", "Figma", "WebStorm", "Photoshop"];
}
