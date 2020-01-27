import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpService } from "../http.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  allPets: any = [];
  arr:any = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    // this._route.params.subscribe((params: Params) => {
    //   console.log(params["id"]);
    // });
    this.getAllPets();
  }

  getAllPets() {
    let observable = this._httpService.showAllPets();
    observable.subscribe((data:any) => {
      // console.log(data);
      let index: any;
      for (index in data) {
        // console.log(data[index].type);
        this.arr.push(data[index].type);
        if(this.arr.includes(data[index].type)) {
          // console.log("yes");
          this.allPets.splice(this.arr.indexOf(data[index].type), 0, data[index]);
        } else {
          // console.log("no");
          this.allPets.push(data[index]);
        }
        // console.log("arr", this.arr);
        // console.log("all pets", this.allPets);
      }
      // for (let key in data.errors) {
      //   this.errors.push(data.errors[key].message);
      // }
    });
  }

  goToShow(id: String) {
    this._router.navigate(["/pets/" + id]);
  }

  goToEdit(id: String) {
    this._router.navigate(["/pets/" + id + "/edit"]);
  }
}
