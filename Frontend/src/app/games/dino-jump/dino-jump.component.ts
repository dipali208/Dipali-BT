import { Component, OnInit } from '@angular/core';
import { Games } from '../rock-paper-scissor/games';
import { ScoreService } from 'src/app/services/admin/score.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dino-jump',
  templateUrl: './dino-jump.component.html',
  styleUrls: ['./dino-jump.component.scss']
})
export class DinoJumpComponent implements OnInit {
  id:any=2;
  score: number = 0;
  finalScore: number = 0;
  constructor(private router: Router, private scoreService: ScoreService) { }

  ngOnInit() {
  }
  jump() {
    this.score = this.score + 10;

    var character = document.getElementById("character");
    if (character != null) {
      character.classList.add("animate");
    }

    setTimeout(function () {
      if (character != null) {
        character.classList.remove("animate");
      }

    }, 500);
  }
  checkDead = setInterval(() => {
    var character = document.getElementById("character");
    var block = document.getElementById("block");
    if (character != null && block != null) {
      var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
      if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        this.finalScore = this.score;
        let currDate = new Date().toISOString().slice(0, 10);

        const game = new Games(1, 2, this.score, currDate)
        this.scoreService.addGameScore(game).subscribe(() => {
          alert(game);
          this.router.navigate(['prevScore/'+this.id]);
        })
        this.score = 0;
        block.style.animation = "none";
        alert("losed");




      }
    }
  }, 10);


}
