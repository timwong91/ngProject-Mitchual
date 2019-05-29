import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { RecipeApiService } from "../recipe-api.service";

@Component({
  selector: "recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Input() recipeData: any[];
  @Input() favoriteRecipe: any[];
  shouldBeVisible: boolean = false;
  @Input() clickedHeart: boolean;
  constructor(private recipeApiService: RecipeApiService) {}

  ngOnInit() {
    this.recipeData = this.recipeApiService.getRecipes();
  }

  // changed parameter to favRecipe which is an object
  addToFavorites(favRecipe, i): void {
    this.favoriteRecipe = this.recipeApiService.addToFavorite(favRecipe);
    this.recipeApiService.toggleHeart(i);
    console.log(this.favoriteRecipe);
  }

  toggleRecipe(i) {
    this.recipeData[i].shouldBeVisible = !this.recipeData[i].shouldBeVisible;
  }

  // toggleHeart(i) {
  //   this.recipeApiService.toggleHeart(i);
  // }
}
