import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpService } from "../http.service";

@Component({
  selector: "app-edit-pet",
  templateUrl: "./edit-pet.component.html",
  styleUrls: ["./edit-pet.component.css"]
})
export class EditPetComponent implements OnInit {
  editPet: any = {};
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
    this._route.params.subscribe((params: Params) => {
      console.log(params["id"]);
      this.getOnePet(params["id"]);
    });
    this.skill1 = "";
    this.skill2 = "";
    this.skill3 = "";
    this.editPet = {
      name: "",
      type: "",
      description: ""
    };
  }

  goToShow(id: String) {
    this._router.navigate(["/pets/" + id]);
  }

  getOnePet(id: String) {
    let observable = this._httpService.findOnePet(id);
    observable.subscribe(data => {
      console.log(data);
      this.editPet = data;
      this.skill1 = data["skill"][0];
      this.skill2 = data["skill"][1];
      this.skill3 = data["skill"][2];
    });
  }

  onSubmitEditPet(id: String, data) {
    this.errors = [];
    let observable = this._httpService.updatePet(id, {
      name: this.editPet.name,
      type: this.editPet.type,
      description: this.editPet.description,
      skill: [this.skill1, this.skill2, this.skill3]
    });
    observable.subscribe((data: any) => {
      console.log(data["errors"]);
      if (data["errors"]) {
        //this is an error check for custom error messages (see models for custom error message setup)
        for (let key in data.errors) {
          this.errors.push(data.errors[key].message);
        }
      } else {
        // this line clears the errors array when they are successful
        this.errors = [];
        console.log(data);
        this.goToShow(id);
      }
    });
  }
}
