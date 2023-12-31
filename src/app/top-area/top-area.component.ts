import { Component, Injectable, OnInit } from "@angular/core";

@Component({
  selector: 'app-top-area',
  templateUrl: './top-area.component.html',
  styleUrls: ['./top-area.component.css']
})

@Injectable({
  providedIn: "root"
})

export class TopAreaComponent implements OnInit {

  ngOnInit(){
  }

  ThemeMode(){
    for(let item = 0; item <= 3; item++) {
      this.ThemeFade(document.getElementsByClassName("dark_layer")[item]);
      this.ThemeFade(document.getElementsByClassName("light_layer")[item])
    }
  }

  ThemeFade(element:any) {
    element.classList[1] == "dark_layer" ? element.classList.toggle("dark_fade") : element.classList.toggle("light_fade");
  }
}
