import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { RecipeApiService } from "../recipe-api.service";

@Component({
  selector: "favorites-page",
  templateUrl: "./favorites-page.component.html",
  styleUrls: ["./favorites-page.component.css"]
})
export class FavoritesPageComponent implements OnInit {
  favoriteRecipe: any[] = [];
  shouldBeVisible: boolean = false;
  @Input() clickedHeart: boolean;

  constructor(private recipeApiService: RecipeApiService) {}

  ngOnInit() {
    this.favoriteRecipe = this.recipeApiService.getFavorites();
  }

  toggleFavorite(i) {
    this.favoriteRecipe[i].shouldBeVisible = !this.favoriteRecipe[i]
      .shouldBeVisible;
  } 

  deleteFromFavorites(index: number, favoriteLabel: string) {
    // console.log(favoriteLabel);
    this.recipeApiService.untoggleHeart(favoriteLabel);
    this.favoriteRecipe = this.recipeApiService.deleteFromFavorites(index);
    // this.favoriteRecipe.splice(index, 1);
  } 

}
