import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game.model';
import { HttpClient } from '@angular/common/http';
import{Router} from '@angular/router';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  /* card balance is 600rs*/
  balance:number=600;
  games :Game[];
constructor(private gamService:GameService,private router:Router,) { }

 ngOnInit() {
    
  this.gamService.getGames()
  .subscribe((data:Game[])=>{
    this.games=data;
    })
 }}

 