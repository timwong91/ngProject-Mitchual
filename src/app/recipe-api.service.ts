import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RecipeApiService {
  appid: string = "b5c9605c";
  apikey: string = "bd777770e78b145d634b5bf922500535";
  apiUrl: string;
  searchTermUrl: string;
  caloriesUrl: string;
  dietUrl: string;
  favoriteRecipe: any[] = [];
  recipeData: any[] = [];

  clickedHeart: boolean = false;
  constructor(private http: HttpClient) {}

  // getEdamamData(searchTerm, caloriesMin, caloriesMax, diet) {
  //   return this.http
  //     .get(
  //       `https://api.edamam.com/search?q=${searchTerm}&app_id=${
  //         this.appid
  //       }&app_key=${
  //         this.apikey
  //       }&from=0&to=3&calories=${caloriesMin}-${caloriesMax}&diet=${diet}`
  //     )
  //     .toPromise()
  //     .then(response => {
  //       this.recipeData = response["hits"];
  //       this.recipeData = this.recipeData.map(recipe => {
  //         return { ...recipe, shouldBeVisible: false }
  //       });
  //       console.log(this.recipeData);
  //       return this.recipeData;
  //     });
  //    `https://api.edamam.com/search?q=${searchTerm}&app_id=${
  //   this.appid
  // }&app_key=${
  //   this.apikey
  // }&from=0&to=3&calories=${caloriesMin}-${caloriesMax}&diet=${diet}

  getEdamamData(
    searchTerm: string,
    caloriesMin: number | string,
    caloriesMax: number | string,
    diet: string
  ) {
    this.apiUrl = `https://api.edamam.com/search?app_id=${this.appid}&app_key=${
      this.apikey
    }&from=0&to=3`;
    this.searchTermUrl = `&q=${searchTerm}`;
    this.caloriesUrl = `&calories=${caloriesMin}-${caloriesMax}`;
    this.dietUrl = `&diet=${diet}`;
    if (diet === "" && caloriesMax === "" && caloriesMin === "") {
      return this.http
        .get(`${this.apiUrl}${this.searchTermUrl}`)
        .toPromise()
        .then(response => {
          this.recipeData = response["hits"];
          this.recipeData = this.recipeData.map(recipe => {
            return { ...recipe, shouldBeVisible: false, clickedHeart: false };
          });
          console.log(this.recipeData);
          return this.recipeData;
        });
    } else if (diet === "") {
      return this.http
        .get(`${this.apiUrl}${this.searchTermUrl}${this.caloriesUrl}`)
        .toPromise()
        .then(response => {
          this.recipeData = response["hits"];
          this.recipeData = this.recipeData.map(recipe => {
            return { ...recipe, shouldBeVisible: false, clickedHeart: false };
          });
          console.log(this.recipeData);
          return this.recipeData;
        });
    } else if (caloriesMax === "" && caloriesMin === "") {
      return this.http
        .get(`${this.apiUrl}${this.searchTermUrl}${this.dietUrl}`)
        .toPromise()
        .then(response => {
          this.recipeData = response["hits"];
          this.recipeData = this.recipeData.map(recipe => {
            return { ...recipe, shouldBeVisible: false, clickedHeart: false };
          });
          console.log(this.recipeData);
          return this.recipeData;
        });
    } else {
      return this.http
        .get(
          `${this.apiUrl}${this.searchTermUrl}${this.caloriesUrl}${
            this.dietUrl
          }`
        )
        .toPromise()
        .then(response => {
          this.recipeData = response["hits"];
          this.recipeData = this.recipeData.map(recipe => {
            return { ...recipe, shouldBeVisible: false, clickedHeart: false };
          });
          console.log(this.recipeData);
          return this.recipeData;
        });
    }
  }

  getRecipes() {
    return this.recipeData;
  }

  getFavorites() {
    return this.favoriteRecipe;
  }

  addToFavorite(newFavorite) {
    this.favoriteRecipe.push(newFavorite);
    // console.log(newFavorite);
    return this.favoriteRecipe;
    
  }

  deleteFromFavorites(index) {
    this.favoriteRecipe.splice(index, 1);
    return this.favoriteRecipe;
  }

  toggleHeart(i) {
    // this.clickedHeart = !this.clickedHeart;
    // this.recipeData[i].clickedHeart = !this.recipeData[i].clickedHeart;
    this.recipeData[i].clickedHeart = true;
    // console.log(this.clickedHeart);
    console.log(this.recipeData[i].clickedHeart);
    // return this.clickedHeart;
  }
  // searchRecipe(form) {
  //   console.log(form.value);
  //   this.recipeApiService.getEdamamData(form.value).subscribe(response => {
  //     this.recipeData = response["hits"];
  //     console.log(this.recipeData);
  //   });
  // }
}
