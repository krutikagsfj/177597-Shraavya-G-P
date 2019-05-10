import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game.model';
import { GameService } from '../service/game.service';
import { Router } from '../../../node_modules/@angular/router';
/*components*/
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  games :Game[];
  /*intial balance*/
  balance:number=600;
 constructor(private gamService:GameService,private router:Router,) { }

  ngOnInit() {
    
  }
 
}
