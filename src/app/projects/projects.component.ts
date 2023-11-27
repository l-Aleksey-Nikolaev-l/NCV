import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {

  projectsData = [
    {
      picture: "assets/img/Currency_Chart.PNG",
      projectName: "Currency Chart",
      description: "A web-app with a chart for comparing currencies. " +
        "The app contains a user management panel. A client was built " +
        "using Angular, CSS, HTML and Capture One. Server side: NodeJS and " +
        "Firebase database. Login to the app: Admin / Password: 12345",
      link: ""
    },
    {
      picture: "assets/img/PhotoTransfer.gif",
      projectName: "PhotoTransfer",
      description: "A Windows application for archiving photos. User can copy or " +
        "move photos from memory card to an archive folder (an external HDD/SSD). Built using " +
        "C# and Windows Forms in Visual Studio",
      link: ""
    },
    {
      picture: "assets/img/Playfair.gif",
      projectName: "Playfair cipher",
      description: "a Windows application for text encryption. This app uses Playfair cipher " +
        "with all rules and a keyword. In addition, user can decipher a text. " +
        "Built using C# and Windows Forms in Visual Studio ",
      link: ""
    },
    {
      picture: "assets/img/CV_As_A_Project.gif",
      projectName: "CV As A Project",
      description: "An one-page CV web project built using HTML, CSS in WebStorm and Adobe Lightroom",
      link: ""
    }
  ];

}
