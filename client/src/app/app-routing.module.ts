import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorComponent } from "./error/error.component";
import { HomeComponent } from "./home/home.component";
import { CreatePetComponent } from "./create-pet/create-pet.component";
import { ShowPetComponent } from "./show-pet/show-pet.component";
import { EditPetComponent } from "./edit-pet/edit-pet.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "pets/new", component: CreatePetComponent },
  { path: "pets/:id", component: ShowPetComponent },
  { path: "pets/:id/edit", component: EditPetComponent },
 
  // use a colon and parameter name to include a parameter in the url
  // { path: 'gamma/:id', component: GammaComponent },

  // redirect to /home if there is nothing in the url
  { path: "", pathMatch: "full", redirectTo: "/home" },
  // the ** will catch anything that did not match any of the above routes
  { path: "error", component: ErrorComponent },
  { path: "**", redirectTo: "/error" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
