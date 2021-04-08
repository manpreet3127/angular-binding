import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MyContainerComponent } from "./myContainer/myContainer.component";
import { MyTopnavContainer } from "./myContainer/topnav/topnav.component";
import { HeaderComponent } from "./myContainer/header/header.component";
import { DatabindComponent } from "./databind/data-bind.component";
import { ClassStyleComponent } from "./classStyle/class-style.component";
import { EventBindComponent } from "./databind/EventBind/event-bind.component";
import { TwowayBindingComponent } from "./databind/TwowayBinding/two-way-bind.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MyContainerComponent,
    MyTopnavContainer,
    HeaderComponent,
    DatabindComponent,
    ClassStyleComponent,
    EventBindComponent,
    TwowayBindingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
