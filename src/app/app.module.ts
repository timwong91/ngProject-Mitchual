import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RecipeApiService } from "./recipe-api.service";
import { AppComponent } from "./app.component";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { FavoritesPageComponent } from "./favorites-page/favorites-page.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    RecipeListComponent,
    FavoritesPageComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [RecipeApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
