import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";
import { TopAreaComponent } from "../top-area/top-area.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  constructor(private appComponent:AppComponent,
              private topArea: TopAreaComponent) {}

  hash:string = "#";
  top_area: string = this.appComponent.top_area;
  about_me: string = this.appComponent.about_me;
  projects: string = this.appComponent.projects;
  skills: string = this.appComponent.skills;
  experience: string = this.appComponent.experience;
  education: string = this.appComponent.education;
  hobby: string = this.appComponent.hobby;
  contacts:string = this.appComponent.contacts;

  checked:boolean = false;

  ngOnInit() {}

  DrawerMenu() {
    this.checked = !this.checked;
  }

  ChangeTheme() {
    this.topArea.ThemeMode();
    this.NCVTheme(document.getElementById("body"));
  }

  NCVTheme(element:any) {
    console.log(element.classList)

    if(element.classList[0] == "themeLight") {
      element.classList.remove("themeLight");
      element.classList.add("themeDark");
    }
    else {
      element.classList.remove("themeDark");
      element.classList.add("themeLight");
    }
  }
}


window.addEventListener("scroll", updateNav);

function updateNav() {
  let containers = document.getElementsByClassName("main_section");
  for(let section in containers) {
    let sectionId = document.getElementById(containers[section].id);
    if(!sectionId) return;

    let container_Top = sectionId.getBoundingClientRect().y;
    let container_Height = sectionId.clientHeight;

    let nav = document.getElementById("nav_" + containers[section].id);
    if(!nav) return;

    if (container_Top <= 61 && container_Top >= -(container_Height-61)) {
      nav.style.textDecoration = "underline";
      nav.style.textUnderlineOffset = "6px";
    }
    else {
      nav.style.textDecoration = "none";
    }
  }
}
