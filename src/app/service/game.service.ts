import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Game } from '../model/game.model';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl:  string ='http://localhost:3000/GameList';
  
 constructor(private http: HttpClient) { }
  

getGames(){
  return this.http.get<Game[]>(this.baseUrl);}
}
