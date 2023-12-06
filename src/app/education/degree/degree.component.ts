import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.css']
})
export class DegreeComponent implements OnInit {

  @Input() inputDegreeData: any;
  ngOnInit() {
  }
}
