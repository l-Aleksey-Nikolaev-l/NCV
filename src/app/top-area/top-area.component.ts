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

  ngOnInit(){}


  layer1:string = "assets/img/Light/layer-1.png";
  layer2:string = "assets/img/Light/layer-2.png";
  layer4:string = "assets/img/Light/layer-4.png";
  layer5:string = "assets/img/Light/layer-5.png";

}
