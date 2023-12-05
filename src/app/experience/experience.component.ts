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
        "Writing code for manufacturing machines",
        "Testing, analyzing and correcting existing code",
        "Supporting code at all stages of the life cycle",
        "Writing technical documentation",
        "Training & mentoring"
      ],
    },
    {
      companyName: "ITMO University",
      years:"2012 - 2014",
      jobPosition: "Adjuster CNC machines",
      jobDescription: [
        "Working with 3-Axis and 3+1-Axis CNC machines",
        "Setting up production equipment",
        "Debugging program projects",
        "Reading blueprints and technical documentation",
        "Writing documentation for the purchase of tools"
      ],
    }]

}
