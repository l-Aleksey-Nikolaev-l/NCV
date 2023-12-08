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
      hobbyName: "Programming",
      hobbyDescription: "Ad consectetur deserunt dicta dignissimos dolore dolorem doloremque " +
        "error est eveniet fugit id, ipsum laboriosam maxime natus non optio, possimus provident.",
      hobbyLink: "https://github.com/l-Aleksey-Nikolaev-l"
    }
  ]

  ngOnInit() {
  }

}
