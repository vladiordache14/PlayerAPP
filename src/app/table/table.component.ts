import { Component, OnInit } from '@angular/core';

import { ResourceLoader } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';
import { PlayerService } from '../shared/serv';
import { Player } from '../shared/player';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private playerService: CrudService, private router: Router,public toastr: ToastrService ){}

  deletePlayer1!:Player;
  hideWhenNoPlayer: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  value:string = "placeholder";
  generatedId!:string;
  playerFromDB: Player[]=[];
  newPlayerName:string='';
  newPlayerNationImg:string='';
  newPlayerRating:number=0;
  newPlayerPosition:string='';
  newPlayerImg:string='';
  newPlayerClubImg='';
  PAC:number=0;
  SHO:number=0;
  PAS:number=0;
  DRI:number=0;
  DEF:number=0;
  PHY:number=0;



  newPlayerId:string=Date.now().toString();
  any!:Player;

  // getPlayers(){
  //   if(this.playerService===undefined){return}
  //   this.playerService.getPlayers().subscribe(result=>
  //     {
  //       this.playerFromDB=result;
  //     })
  // }

  
  
  ngOnInit() {
    this.dataState();
    let s = this.playerService.GetPlayersList();
    s.snapshotChanges().subscribe((data) => {
      this.playerFromDB = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.playerFromDB.push(a as Player);
      });
    });
  }

  dataState() {
    this.playerService
      .GetPlayersList()
      .valueChanges()
      .subscribe((data) => {
        this.preLoader = false;
        if (data.length <= 0) {
          this.hideWhenNoPlayer = false;
          this.noData = true;
        } else {
          this.hideWhenNoPlayer = true;
          this.noData = false;
        }
      });
  }


  

  clickButton(path: string) {
        this.router.navigate([path]);
    }
 

  
  
}