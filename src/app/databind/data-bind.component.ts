import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-databind",
  templateUrl: "./data-bind.component.html",
  styleUrls: ["./data-bind.component.css"]
})
export class DatabindComponent implements OnInit{
  constructor(){}
  ngOnInit(){}
  dynName:string="Preet";
  myMethod(){
    return"My name is :" +this.dynName
  }
  enable:boolean=false;
  appStatus:boolean = true
  status1="online"
  status2="offline"
}
