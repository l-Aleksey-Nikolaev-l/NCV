import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {

  projectsData = [
    {
      projectName: "Currency Chart",
      picture: "assets/img/Currency_Chart.PNG",
      description: "A web-app with a chart for comparing currencies. " +
        "The app contains a user management panel. A client was built " +
        "using Angular, CSS, HTML and Capture One. Server side: NodeJS and " +
        "Firebase database. Login to the app: Admin / Password: 12345",
      projectLink: "https://currency-chart.vercel.app/Login",
      sourceLink: "https://github.com/l-Aleksey-Nikolaev-l/CurrencyChart"
    },
    {
      projectName: "PhotoTransfer",
      picture: "assets/img/PhotoTransfer.gif",
      description: "A Windows application for archiving photos. User can copy or " +
        "move photos from memory card to an archive folder (an external HDD/SSD). Built using " +
        "C# and Windows Forms in Visual Studio",
      projectLink: "",
      sourceLink: "https://github.com/l-Aleksey-Nikolaev-l/PhotoTransfer"
    },
    {
      projectName: "Playfair cipher",
      picture: "assets/img/Playfair.gif",
      description: "A Windows application for text encryption. This app uses Playfair cipher " +
        "with all rules and a keyword. In addition, user can decipher a text. " +
        "Built using C# and Windows Forms in Visual Studio ",
      projectLink: "",
      sourceLink: "https://github.com/l-Aleksey-Nikolaev-l/Playfair_cipher"
    },
    {
      projectName: "CV As A Project",
      picture: "assets/img/CV_As_A_Project.gif",
      description: "An one-page CV web project built using HTML, CSS in WebStorm and Adobe Lightroom",
      projectLink: "https://l-aleksey-nikolaev-l.github.io/CV/",
      sourceLink: "https://github.com/l-Aleksey-Nikolaev-l/CV"
    }
  ];

}
