import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  jobData = [
    {
      companyName: "ITMO University",
      years:"2014 - 2022",
      jobPosition: "CNC programmer",
      jobDescription: [
        "Create project for CNC machines",
        "Testing, analyze and fix existing projects code",
        "Support a code at all stages of the life cycle",
        "Code review",
        "Technical research (scopus)",
        "Create technical documentation",
        "Meet with customers",
        "Training and mentoring new employees ",
      ],
    },
    {
      companyName: "ITMO University",
      years:"2012 - 2014",
      jobPosition: "Adjuster CNC machines",
      jobDescription: [
        "Work with 3-Axis and 3+1-Axis CNC machines",
        "Set up production equipment",
        "Debug program projects",
        "Read blueprints and technical documentation",
        "Write documentation for the purchase of tools"
      ],
    }]

}
