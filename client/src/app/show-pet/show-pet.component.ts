import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpService } from "../http.service";

@Component({
  selector: "app-show-pet",
  templateUrl: "./show-pet.component.html",
  styleUrls: ["./show-pet.component.css"]
})
export class ShowPetComponent implements OnInit {
  OnePet: any = {};
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
  }

  goHome() {
    this._router.navigate(["/home"]);
  }

  getOnePet(id: String) {
    let observable = this._httpService.findOnePet(id);
    observable.subscribe(data => {
      this.OnePet = data;
    });
  }

  likePet(id: String) {
    let observable = this._httpService.increaseLike(id);
    observable.subscribe(data => {
      this.OnePet = data;
    });
  }
  adoptPet(id: String) {
    let observable = this._httpService.deletePet(id);
    observable.subscribe(data => {
      this.goHome();
    });
  }
}
