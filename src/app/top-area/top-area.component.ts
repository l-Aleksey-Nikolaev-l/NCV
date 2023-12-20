import {Component, Injectable, OnInit} from "@angular/core";

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
    this.ThemeMode("Light");
  }

  ThemeMode(theme:string){
    document.getElementById("layer-1")!.style.backgroundImage = "url(assets/img/" + theme + "/layer-1.png)";
    document.getElementById("layer-2")!.style.backgroundImage = "url(assets/img/" + theme + "/layer-2.png)";
    document.getElementById("layer-4")!.style.backgroundImage = "url(assets/img/" + theme + "/layer-4.png)";
    document.getElementById("layer-5")!.style.backgroundImage = "url(assets/img/" + theme + "/layer-5.png)";
  }
}
