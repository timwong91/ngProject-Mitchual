import { Component, OnInit, Input } from "@angular/core";
import { RecipeApiService } from "../recipe-api.service";

@Component({
  selector: "search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  recipeData: any[] = [];

  constructor(private recipeApiService: RecipeApiService) { }

  ngOnInit() {
    this.recipeData = this.recipeApiService.getRecipes();
  }

  searchRecipe(form): void {
    this.recipeApiService
      .getEdamamData(
        form.value.searchTerm,
        form.value.caloriesMin,
        form.value.caloriesMax,
        form.value.diet
      )
      .then(response => {
        this.recipeData = response;
      });
  }

  deleteFromFavorites(index: number) {
    this.recipeData.splice(index, 1);
  }
}