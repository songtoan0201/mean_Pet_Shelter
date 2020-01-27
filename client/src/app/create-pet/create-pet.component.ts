import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpService } from "../http.service";

@Component({
  selector: "app-create-pet",
  templateUrl: "./create-pet.component.html",
  styleUrls: ["./create-pet.component.css"]
})
export class CreatePetComponent implements OnInit {
  newPet: any = {};
  skill1: any;
  skill2: any;
  skill3: any;
  errors = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this.skill1 = "";
    this.skill2 = "";
    this.skill3 = "";
    this.newPet = {
      name: "",
      type: "",
      description: ""
    };
  }
  goHome() {
    this._router.navigate(["/home"]);
  }
  onSubmitCreatePet() {
    this.errors = [];
    const obs = this._httpService.createPet({
      name: this.newPet.name,
      type: this.newPet.type,
      description: this.newPet.description,
      skill: [this.skill1, this.skill2, this.skill3]
    });
    obs.subscribe((data: any) => {
      if (data["errors"]) {
        //this is an error check for custom error messages (see models for custom error message setup)
        for (let key in data.errors) {
          this.errors.push(data.errors[key].message);
        }
      } else {
        // this line clears the errors array when they are successful
        this.errors = [];
        console.log(data);
        this.goHome();
      }
    });
  }
}
