

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './Components/Admin/about/about.component';
import { AddQuestionsComponent } from './Components/Admin/add-questions/add-questions.component';
import { AdminComponent } from './Components/Admin/admin/admin.component';
import { CreateNewQuizComponent } from './Components/Admin/create-new-quiz/create-new-quiz.component';
import { CreateQuizComponent } from './Components/Admin/create-quiz/create-quiz.component';
import { FooterComponent } from './Components/Admin/footer/footer.component';
import { HeaderComponent } from './Components/Admin/header/header.component';
import { HomeComponent } from './Components/Admin/home/home.component';
import { DisplayQuizListComponent } from './Components/User/display-quiz-list/display-quiz-list.component';
import { DisplayQuizComponent } from './Components/User/display-quiz/display-quiz.component';
import { RegisterComponent } from './Components/User/register/register.component';
import { SliderComponent } from './Components/User/slider/slider.component';
import { UserComponent } from './user/user.component';
import { AddQuizComponent } from './Components/Admin/add-quiz/add-quiz.component';
import { ShowCategoryComponent } from './Components/User/show-category/show-category.component';
import { AngularMaterialModule } from './angular-material.module';
import { ResultComponent } from './Components/User/result/result.component';
//import { ParticlesModule } from 'angular-particle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginDialogComponent } from "./Components/User/login-dialog/login-dialog.component";
import { ProfileComponent } from './Components/User/profile/profile.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { DinoJumpComponent } from './games/dino-jump/dino-jump.component';

import { ChartsModule } from 'ng2-charts';

// import {AutocompleteLibModule} from 'angular-ng-autocomplete';

import { CountdownModule } from 'ngx-countdown';
import { RockPaperScissorComponent } from './games/rock-paper-scissor/rock-paper-scissor.component';
import { ShowPrevScoreComponent } from './games/show-prev-score/show-prev-score.component';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { SquareComponent } from './games/tiktaktoe/square/square.component';
import { BoardComponent } from './games/tiktaktoe/board/board.component';
//import { FieldComponent } from './games/numberPlay/field/field.component';
import { RouterModule } from '@angular/router';
import { AddCategoryComponent } from './Components/Admin/add-category/add-category.component';
import { CategoryListComponent } from './Components/Admin/category-list/category-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    FooterComponent,
    SliderComponent,
    HeaderComponent,
    DisplayQuizListComponent,
    UserComponent,
    AdminComponent,
    CreateQuizComponent,
    CreateNewQuizComponent,
    DisplayQuizComponent,
    AddQuestionsComponent,
    AddQuizComponent,
    ShowCategoryComponent,
    ResultComponent,
    LoginDialogComponent,
    ProfileComponent,
    GameListComponent,
    DinoJumpComponent,
    RockPaperScissorComponent,
    ShowPrevScoreComponent,
    AdminDashboardComponent,
    BoardComponent,
    SquareComponent,
    AddCategoryComponent,
    CategoryListComponent,
   // FieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule,
    CountdownModule,
    MatAutocompleteModule,
    ChartsModule,
    ReactiveFormsModule
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     component: FieldComponent
    //   },
    // ]),

  ],
  providers: [],
  entryComponents: [RegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
