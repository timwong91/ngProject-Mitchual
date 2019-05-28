import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RecipeApiService } from "./recipe-api.service";
import { AppComponent } from "./app.component";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { FavoritesPageComponent } from "./favorites-page/favorites-page.component";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: SearchCriteriaComponent },
  { path: "favorites", component: FavoritesPageComponent },
  { path: "recipe-list", component: RecipeListComponent }
  // { path: "**", component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    RecipeListComponent,
    FavoritesPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [RecipeApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
