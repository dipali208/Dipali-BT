import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/admin/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  gameName: any;
  constructor(private gameService: GameService,
    private route: Router) {

    // this.route.paramMap.subscribe((p:ParamMap)=>{
    //   this.id=p.get("id");
    //   sessionStorage.setItem("categoryId",this.id);
    //   this.gameService.getgameById(this.id);
    //   if(this.gameId==1)

    // })

  }


  routeTogame(gameId: number) {
    if (gameId === 1) {
      this.route.navigate(['game/1']);
    }
    if (gameId === 2) {
      this.route.navigate(['game/2'])
    }
    if (gameId === 3) {
      this.route.navigate(['game/3'])
    }
  }
  ngOnInit(): void {
    this.getAllGames();
  }

  getAllGames() {
    return this.gameService.getAllGames()
      .subscribe(
        que => {
          this.gameName = que;
          console.log(this.gameName);
        }
      );
  }


}
