import { Component, OnInit, Input } from "@angular/core";
import { RecipeApiService } from "../recipe-api.service";

@Component({
  selector: "favorites-page",
  templateUrl: "./favorites-page.component.html",
  styleUrls: ["./favorites-page.component.css"]
})
export class FavoritesPageComponent implements OnInit {
  favoriteRecipe: any[] = [];
  shouldBeVisible: boolean = false;

  constructor(private recipeApiService: RecipeApiService) {}

  ngOnInit() {
    this.favoriteRecipe = this.recipeApiService.getFavorites();
  }

  toggleFavorite(i) {
    this.favoriteRecipe[i].shouldBeVisible = !this.favoriteRecipe[i]
      .shouldBeVisible;
  }

  deleteFromFavorites(i) {
    this.favoriteRecipe = this.recipeApiService.deleteFromFavorites(i);
  }
}
