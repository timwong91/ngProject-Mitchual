import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RecipeApiService {
  appid: string = "b5c9605c";
  apikey: string = "bd777770e78b145d634b5bf922500535";

  favoriteRecipe: any[] = [];

  recipeData: any[] = [];

  constructor(private http: HttpClient) {}

  getEdamamData(searchTerm, caloriesMin, caloriesMax, diet) {
    return this.http
      .get(
        `https://api.edamam.com/search?q=${searchTerm}&app_id=${
          this.appid
        }&app_key=${
          this.apikey
        }&from=0&to=3&calories=${caloriesMin}-${caloriesMax}&diet=${diet}`
      )
      .toPromise()
      .then(response => {
        this.recipeData = response["hits"];
        console.log(this.recipeData);
        return this.recipeData;
      });
  }
  getRecipes() {
    return this.recipeData;
  }

  getFavorites() {
    return this.favoriteRecipe;
  }

  addToFavorite(newFavorite) {
    this.favoriteRecipe.push(newFavorite);
    console.log(newFavorite);
    return this.favoriteRecipe;
  }

  // searchRecipe(form) {
  //   console.log(form.value);
  //   this.recipeApiService.getEdamamData(form.value).subscribe(response => {
  //     this.recipeData = response["hits"];
  //     console.log(this.recipeData);
  //   });
  // }
}
