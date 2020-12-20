import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

import { Games } from './games';

import { ScoreService } from 'src/app/services/admin/score.service';
import { GameService } from 'src/app/services/admin/game.service';



@Component({
  selector: 'app-rock-paper-scissor',
  templateUrl: './rock-paper-scissor.component.html',
  styleUrls: ['./rock-paper-scissor.component.scss']
})
export class RockPaperScissorComponent implements OnInit {
  id: any = 1;

  game: Games;
  scores = [0, 0];
  weapons = [
    'rock',
    'paper',
    'scissors'
  ];
  playerSelected = -1;
  enemySelected = -1;
  loading = false;
  isResultShow = false;
  theResult = 0;

  gameId: any


  pick(weapon: number): void {
    // return immediately when still loading. You don't want
    // tslint:disable-next-line:curly
    if (this.loading) return;
    this.loading = true;
    this.playerSelected = weapon;

    // create a delay to simulate enemy's turn.
    setTimeout(() => {
      this.loading = false;
      // generate a number from 0 - 2
      const randomNum = Math.floor(Math.random() * 3);
      this.enemySelected = randomNum;
      this.checkResult();
      this.isResultShow = true;
    }, Math.floor(Math.random() * 500) + 200);
  }

  reset(): void {
    this.scores = [0, 0];
  }
  checkResult(): void {
    const playerPick = this.playerSelected;
    const enemyPick = this.enemySelected;
    // if you and the computer have the same weapon, then it is a tie.
    // tslint:disable-next-line:triple-equals
    if (playerPick == enemyPick) {
      this.theResult = 2;
    }
    // tslint:disable-next-line:triple-equals
    else if ((playerPick - enemyPick + 3) % 3 == 1) {
      // YOU WIN
      this.theResult = 0;
      this.scores[0] = this.scores[0] + 1;
      this.game.score = this.scores[0];

      // console.log(this.game);
    }
    else {
      // YOU LOSE
      this.theResult = 1;
      // tslint:disable-next-line:whitespace
      // tslint:disable-next-line:align
      this.scores[1] = this.scores[1] + 1;
    }
  }

  constructor(private router: Router, private gameService: GameService, private scoreService: ScoreService, private route: ActivatedRoute) {
    // this.route.paramMap.subscribe((p: ParamMap) => {
    //   this.id = p.get("id");
    //   //   sessionStorage.setItem("categoryId",this.id);
    //   //   this.gameService.getgameById(this.id);
    //   this.gameService.getGame(this.id)

    // })
  }

  ngOnInit(): void {
    this.gameService.getGame(this.gameId).subscribe((g) => {
      console.log(g);
    });
  }

  goToHome() {
    this.router.navigate(['home']);
  }


  saveScore() {
    let currDate = new Date().toISOString().slice(0, 10);

    const game = new Games(1, this.id, this.scores[0], currDate)
    this.scoreService.addGameScore(game).subscribe(() => {
      alert(this.id);
      this.router.navigate(['prevScore/' + this.id]);
    })
  }
}