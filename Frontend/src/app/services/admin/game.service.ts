import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }


  getGame(gameId: any) {

    return this.http.get('http://localhost:8080/api/game/' + gameId)
  }


  getPrevScore(userid: number, gameId: number) {
    return this.http.get('http://localhost:8080/api/game/prev?userId=' + userid + '&gameId=' + gameId)
  }

  getAllGames() {
    return this.http.get('http://localhost:8080/api/game/allGames');
  }

  getgameById(gameId: number) {
    return this.http.get('http://localhost:8080/api/game/byId/' + gameId);
  }
}
