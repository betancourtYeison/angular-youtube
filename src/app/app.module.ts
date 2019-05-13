import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";

import { DomsecurePipe } from "./pipes/domsecure.pipe";

import { YoutubeService } from "./services/youtube.service";

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, DomsecurePipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
