import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/Admin/about/about.component';
import { AddQuestionsComponent } from './Components/Admin/add-questions/add-questions.component';
import { AdminComponent } from './Components/Admin/admin/admin.component';
import { CreateQuizComponent } from './Components/Admin/create-quiz/create-quiz.component';
import { HomeComponent } from './Components/Admin/home/home.component';
import { DisplayQuizListComponent } from './Components/User/display-quiz-list/display-quiz-list.component';
import { DisplayQuizComponent } from './Components/User/display-quiz/display-quiz.component';
import { RegisterComponent } from './Components/User/register/register.component';
import { UserComponent } from './user/user.component';
import { ResultComponent } from './Components/User/result/result.component';
import { AuthService } from './services/admin/auth.service';
import { ProfileComponent } from './Components/User/profile/profile.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { DinoJumpComponent } from './games/dino-jump/dino-jump.component';
import { LoginDialogComponent } from './Components/User/login-dialog/login-dialog.component';
import { RockPaperScissorComponent } from './games/rock-paper-scissor/rock-paper-scissor.component';
import { ShowPrevScoreComponent } from './games/show-prev-score/show-prev-score.component';
import { BoardComponent } from './games/tiktaktoe/board/board.component';
import { AddCategoryComponent } from './Components/Admin/add-category/add-category.component';
import { AddQuizComponent } from './Components/Admin/add-quiz/add-quiz.component';
import { CategoryListComponent } from './Components/Admin/category-list/category-list.component';


const routes: Routes = [
  {path:"displayQuizList/:id",component:DisplayQuizListComponent,canActivate:[AuthService]},
  {path:"profile",component:ProfileComponent},
  {path:"login",component:LoginDialogComponent},
  // {path:"gamezone",component:GameListComponent,canActivate:[AuthService]},
  // {path:"gamezone/jumpingbox",component:DinoJumpComponent},

  {path:'home',component:HomeComponent},
  {path:'addQuestions/:quizName',component:AddQuestionsComponent,canActivate:[AuthService]},
  {path:'DisplayQuiz/:id',component:DisplayQuizComponent,canActivate:[AuthService]},
  {path:'admin',component:AdminComponent,canActivate:[AuthService]},
  {path:'admin/addCategory',component:AddCategoryComponent,canActivate:[AuthService]},
  {path:'admin/createQuiz',component:CreateQuizComponent,canActivate:[AuthService]},
  {path:'admin/addQuestions',component:AddQuizComponent,canActivate:[AuthService]},
  {path:'user',component:UserComponent},
  {path:'about',component:AboutComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin/categoryList',component:CategoryListComponent},
  {path:'result',component:ResultComponent,canActivate:[AuthService]},
  {path:'catList/:id',component:DisplayQuizListComponent,canActivate:[AuthService]},
  {path:'quizLists/:id',component:DisplayQuizComponent,canActivate:[AuthService]},
  { path: 'game/1', component: RockPaperScissorComponent },
  { path: 'game/2', component: DinoJumpComponent },
  { path: 'game/3', component: BoardComponent },
  { path: 'prevScore/:id', component: ShowPrevScoreComponent },
  
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
