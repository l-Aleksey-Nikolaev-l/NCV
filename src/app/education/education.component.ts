import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  eduDegree = [
    {
      university: "ITMO University",
      years: "2017 - 2021",
      degree: "Postgraduate degree (PhD)",
      GPA: "4.37",
      Thesis: "Research and modernization of laser heads for their use in CNC machines"
    },
    {
      university: "ITMO University",
      years: "2017 - 2021",
      degree: "Master's Degree",
      GPA: "4.76",
      Thesis: "Study of the influence of end mills and the combination of roughing and finishing in the manufacture of parts from alloy AMg6"
    },
    {
      university: "ITMO University",
      years: "2017 - 2021",
      degree: "Bachelor's degree",
      GPA: "4.41",
      Thesis: "Development of a technological process for the manufacture of the \"Lid\" part"
    },
    {
      university: "Professional lyceum \"Petrogradsky\"",
      years: "2007 - 2011",
      degree: "CNC Setter",
      GPA: "4.05",
      Thesis: "Creation a CNC program for an aluminum body."
    }];

  constructor() {
  }

  ngOnInit() {
  }

}
