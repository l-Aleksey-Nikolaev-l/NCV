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
      hobbyDescription: "I'm keen on various programming languages and use them in microelectronics and OS's. " +
        "I'm interested in modern computers as in vintage computers and electronics chips. " +
        "I'm familiar with Arduino, Atmel, Pic and programmed them",
      hobbyLink: "https://github.com/l-Aleksey-Nikolaev-l?tab=repositories"
    },
    {
      hobbyPicture: "assets/icons/Photocamera.svg",
      hobbyName: "Photography . . . Videography",
      hobbyDescription: "I like to take photos on digital and film cameras and then develop them. " +
        "Usually I work in Photoshop & Capture One. " +
        "From time to time I like to make videos and edit them in DaVinci Resolve",
      hobbyLink: "https://www.instagram.com/mister.nikolson/"
    },
    {
      hobbyPicture: "assets/icons/Maps.svg",
      hobbyName: "Science . . . Traveling",
      hobbyDescription: "I really like travels. I visited many countries by car because I have a driver's license I like adventures. " +
        "Also I like science and from time to time I write scientific articles ",
      hobbyLink: "https://www.researchgate.net/profile/Aleksei-Nikolaev"
    }
  ]

  ngOnInit() {
  }

}
