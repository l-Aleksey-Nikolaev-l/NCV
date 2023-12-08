import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  hobbies = [
    {
      hobbyPicture: "assets/icons/Development.svg",
      hobbyName: "Programming . . . Computers",
      hobbyDescription: "Ad consectetur deserunt dicta dignissimos dolore dolorem doloremque " +
        "error est eveniet fugit id, ipsum laboriosam maxime natus non optio, possimus provident.",
      hobbyLink: "https://github.com/l-Aleksey-Nikolaev-l?tab=repositories"
    },
    {
      hobbyPicture: "assets/icons/Photocamera.svg",
      hobbyName: "Photography . . . Videography",
      hobbyDescription: "Ad consectetur deserunt dicta dignissimos dolore dolorem doloremque " +
        "error est eveniet fugit id, ipsum laboriosam maxime natus non optio, possimus provident.",
      hobbyLink: "https://www.instagram.com/mister.nikolson/"
    },
    {
      hobbyPicture: "assets/icons/Maps.svg",
      hobbyName: "Science . . . Travels",
      hobbyDescription: "Ad consectetur deserunt dicta dignissimos dolore dolorem doloremque " +
        "error est eveniet fugit id, ipsum laboriosam maxime natus non optio, possimus provident.",
      hobbyLink: "https://www.researchgate.net/profile/Aleksei-Nikolaev"
    }
  ]

  ngOnInit() {
  }

}
