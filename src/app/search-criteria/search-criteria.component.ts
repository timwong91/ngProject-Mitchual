import { Component, OnInit } from "@angular/core";
import { RecipeApiService } from "../recipe-api.service";

@Component({
  selector: "search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  recipeData: any[] = [];
  constructor(private recipeApiService: RecipeApiService) {}

  ngOnInit() {}

  searchRecipe(form) {
    console.log(form.value);
    this.recipeApiService.getEdamamData(form.value).subscribe(response => {
      this.recipeData = response["hits"];
      console.log(this.recipeData);
    });
  }
}
