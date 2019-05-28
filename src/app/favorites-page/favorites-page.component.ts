import { Component, OnInit } from "@angular/core";
import { RecipeApiService} from "../recipe-api.service";

@Component({
  selector: "favorites-page",
  templateUrl: "./favorites-page.component.html",
  styleUrls: ["./favorites-page.component.css"]
})

export class FavoritesPageComponent implements OnInit {
  favoriteRecipe: any[] = [];
  constructor(private recipeApiService: RecipeApiService) {}

  ngOnInit() {
    this.favoriteRecipe = this.recipeApiService.getFavorites();
  }

    
}
