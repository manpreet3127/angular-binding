import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-EventBind",
  templateUrl: "./event-bind.component.html",
  styleUrls: ["./event-bind.component.css"]
})
export class EventBindComponent implements OnInit {
  ngOnInit() {}
  msg:string="";
  onAddCart(event){
    this.msg=event.target.value+" added in Cart";
  }
  onInputClick(event){
    console.log(event.target.value)

  }
  getInputInfo(my){
    console.log(my.value)
  }
}
