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
      GPA: "4.37 of 5.00",
      field: "Engineering (Faculty of Control Systems and Robotics)"
    },
    {
      university: "ITMO University",
      years: "2015 - 2017",
      degree: "Master's Degree",
      GPA: "4.76 of 5.00",
      field: "Engineering (Device-making technologies)"
    },
    {
      university: "ITMO University",
      years: "2011 - 2015",
      degree: "Bachelor's degree",
      GPA: "4.41 of 5.00",
      field: "Engineering"
    },
    {
      university: "Professional lyceum \"Petrogradsky\"",
      years: "2007 - 2011",
      degree: "CNC Setter",
      GPA: "4.05 of 5.00",
      field: "Setting up CNC machines"
    }];

  eduCertificates = [
    {
      certificateImage: "assets/img/Johns-Hopkins-University.png",
      certificateName: "HTML, CSS, and Javascript for Web Developers",
      certificateID: "V3RY4TFUDBM3",
      place: "The Johns Hopkins University",
      issueDate: "February 2023",
      certificateLink: "https://www.coursera.org/account/accomplishments/verify/V3RY4TFUDBM3"
    },
    {
      certificateImage: "assets/img/HackerRank_1000px.png",
      certificateName: "CSS (Basic)",
      certificateID: "B1B49D0C7BF3",
      place: "HackerRank",
      issueDate: "November 2023",
      certificateLink: "https://www.hackerrank.com/certificates/b1b49d0c7bf3"
    }
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
