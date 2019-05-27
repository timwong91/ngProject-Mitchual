import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.css"]
})
export class RecipeComponent implements OnInit {
  @Input() recipe: any[];
  constructor() {}

  ngOnInit() {}
}
