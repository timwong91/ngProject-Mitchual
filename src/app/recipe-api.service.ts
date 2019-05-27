import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RecipeApiService {
  appid: string = "b5c9605c";
  apikey: string = "bd777770e78b145d634b5bf922500535";

  constructor(private http: HttpClient) {}

  getEdamamData(
    searchTerm: string,
    caloriesMin: number,
    caloriesMax: number
    // cuisineType: string
  ) {
    return this.http.get(
      `https://api.edamam.com/search?q=${searchTerm}&app_id=${
        this.appid
      }&app_key=${
        this.apikey
      }&from=0&to=3&calories=${caloriesMin}-${caloriesMax}`
    );
  }
}
