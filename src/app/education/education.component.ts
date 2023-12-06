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
      thesis: "Research and modernization of laser heads for their use in CNC machines"
    },
    {
      university: "ITMO University",
      years: "2015 - 2017",
      degree: "Master's Degree",
      GPA: "4.76",
      thesis: "Study of the influence of end mills and the combination of roughing and finishing in the manufacture of parts from alloy AMg6"
    },
    {
      university: "ITMO University",
      years: "2011 - 2015",
      degree: "Bachelor's degree",
      GPA: "4.41",
      thesis: "Development a technological process for the manufacture of the \"Lid\" part"
    },
    {
      university: "Professional lyceum \"Petrogradsky\"",
      years: "2007 - 2011",
      degree: "CNC Setter",
      GPA: "4.05",
      thesis: "Creation a CNC program for an aluminum body."
    }];

  eduCertificates = [
    {
      certificateImage: "assets/img/Johns-Hopkins-University.png",
      certificateName: "HTML, CSS, and Javascript for Web Developers",
      certificateID: "V3RY4TFUDBM3",
      place: "The Johns Hopkins University",
      issueDate: "February 2023",
      certificateLink: "https://www.coursera.org/account/accomplishments/verify/V3RY4TFUDBM3"
    }
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
