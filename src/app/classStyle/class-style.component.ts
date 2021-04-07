import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-classStyle",
  templateUrl: "./class-style.component.html",
  styleUrls: ["./class-style.component.css"]
})
export class ClassStyleComponent implements OnInit {
  ngOnInit() {}

  mypro: boolean = true;
  mystyle1: string = "15px";
  isActive: boolean = true;
  multiClases = {
    class1: true,
    class2: true,
    class3: true
  };
  multiStyle = {
    background: "pink",
    border: "10px solid black"
  };
}
