import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./error/error.component";
import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CreatePetComponent } from './create-pet/create-pet.component';
import { ShowPetComponent } from './show-pet/show-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrorComponent, CreatePetComponent, ShowPetComponent, EditPetComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
