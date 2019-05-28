import { Component, OnInit, Input } from "@angular/core";
import { RecipeApiService } from "../recipe-api.service";

@Component({
  selector: "recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})

export class RecipeListComponent implements OnInit {
  @Input() recipeData: any[];
  constructor(private recipeApiService: RecipeApiService) {}

  ngOnInit() {
    this.recipeData = this.recipeApiService.getRecipes();
  }
}
