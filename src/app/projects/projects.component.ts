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
      picture: "assets/img/Currency_Chart.gif",
      description: "A web-app with a chart for comparing currencies. " +
        "The app contains a user management panel. A client was built " +
        "using Angular, CSS, HTML and Capture One. Server side: NodeJS and " +
        "Firebase database. Login to the app: Admin / Password: 12345",
      projectLink: "https://currency-chart.vercel.app/Login",
      sourceLink: "https://github.com/l-Aleksey-Nikolaev-l/CurrencyChart"
    },
    {
      projectName: "Thread calculator",
      picture: "assets/img/Thread_calculator.gif",
      description: "A web-app for getting a code for CNC machines." +
		  "A user can add point coordinates for an X and a Z axis, set a pitch" +
		  " and a start angle. The app created for SGS Dental company with" +
		  " vanilla JS, HTML and CSS.",
      projectLink: "https://l-aleksey-nikolaev-l.github.io/Thread-calculator/",
      sourceLink: "https://github.com/l-Aleksey-Nikolaev-l/Thread-calculator"
    },
    {
      projectName: "Christmas Shop",
      picture: "assets/img/Christmas_shop.gif",
      description: "A simple web-app shop with two pages for 3 screens" +
		  " (mobile, tablet and desktop) and designed by desktop-first design strategy." +
		  " The design is Figma project of Nastya Maksimenko. The app created with" +
		  " vanilla JS, HTML and CSS. All paged created in HTML and CSS." +
		  " Based on JS was created interactivity like a carousel.",
      projectLink: "https://rolling-scopes-school.github.io/nginit-JSFE2024Q4/christmas-shop/",
      sourceLink: "https://github.com/l-Aleksey-Nikolaev-l/Christmas-Shop"
    },
    {
      projectName: "Simon says game",
      picture: "assets/img/Simons_says.gif",
      description: "A game for 3 screens and designed by desktop-first design strategy." +
		  " The game follows all rules, contains sound effects and visual effects for all game actions." +
		  " Some effects can be changed on settings page. Also, gamer can choose difficulty level" +
		  " and show levels answers in the browser console.",
      projectLink: "https://rolling-scopes-school.github.io/nginit-JSFE2024Q4/Simon-Says/",
      sourceLink: "https://github.com/l-Aleksey-Nikolaev-l/Simon-Says"
    },
    {
      projectName: "Nonograms game",
      picture: "assets/img/Nonograms.gif",
      description: "A game for all screens up to 430px. The game contains 15 game fields with 3 difficulty levels." +
		  " A gamer can save and resume the game at any time, even after closing the browser." +
		  " Also, the gamer can repeat a current came, create a random game and lock the game answer." +
		  " Moreover, it has a \"burger menu\" with settings.",
      projectLink: "https://rolling-scopes-school.github.io/nginit-JSFE2024Q4/nonograms/",
      sourceLink: "https://github.com/l-Aleksey-Nikolaev-l/Nonograms"
    },
    {
      projectName: "News portal",
      picture: "assets/img/News_portal.gif",
      description: "a simple web-app for fetching news portals throw proxy API and showing headers and images" +
		  " in cards components. The app created based on Aleh Serhiyenia design. All components are created" +
		  " with TS and built by Webpack. ",
      projectLink: "https://rolling-scopes-school.github.io/nginit-JSFE2024Q4/News-API/",
      sourceLink: "https://github.com/l-Aleksey-Nikolaev-l/News-API"
    },
    {
      projectName: "CUE Sheet Audio",
      picture: "assets/img/Cue_Sheet.gif",
      description: "This extension was created to make it easier to create and edit " +
        "CUE Sheets of Audio files in VS Code. It supports syntax of CUE Sheet language. " +
        "Built using JSONs and tmLanguage in VSCode",
      projectLink: "https://marketplace.visualstudio.com/items?itemName=QuantumPannonia.cue-sheet-audio",
      sourceLink: "https://github.com/l-Aleksey-Nikolaev-l/CUE-Sheet-Audio"
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
