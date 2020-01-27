import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  showAllPets() {
    return this._http.get("/api/pets");
  }

  createPet(data: any) {
    return this._http.post("/api/pets", data);
  }

  findOnePet(id: String) {
    return this._http.get("/api/pets/" + id);
  }

  updatePet(id: String, data: any) {
    return this._http.put("/api/pets/" + id, data);
  }

  deletePet(id: String) {
    return this._http.delete("/api/pets/" + id);
  }

  increaseLike(id: String) {
    return this._http.get("/api/pets/" + id + "/like");
  }
}
