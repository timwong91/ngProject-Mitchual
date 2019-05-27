import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})

export class RecipeListComponent implements OnInit {
  @Input() recipeData: any[];
  constructor() {}

  ngOnInit() {}
}
