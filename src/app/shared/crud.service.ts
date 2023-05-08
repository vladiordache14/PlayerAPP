import { Injectable } from '@angular/core';
import { Student } from '../shared/student';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Player } from './player';

@Injectable({
  providedIn: 'root',
})

export class CrudService {
  playersRef: AngularFireList<any>;
  playerRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  // Create Student
  AddStudent(player: Player) {
    this.playersRef.push({
      name: player.name,
      position: player.position,
      rating: player.rating,
      playerImg: player.playerImg,
      clubImg: player.clubImg,
      nationImg: player.nationImg,
      PAC: player.PAC,
      SHO: player.SHO,
      PAS: player.PAS,
      DRI: player.DRI,
      DEF: player.DEF,
      PHY: player.PHY,


    });
  }
  

  // Fetch Single Student Object
  GetPlayer(id: string) {
    this.playerRef = this.db.object('player-list/' + id);
    return this.playerRef;
  }

  // Fetch Students List
  GetPlayersList() {
    this.playersRef = this.db.list('player-list');
    return this.playersRef;
  }

  // Update Student Object
  UpdatePlayer(player: Player) {
    this.playerRef.update({
      name: player.name,
      position: player.position,
      rating: player.rating,
      playerImg: player.playerImg,
      clubImg: player.clubImg,
      nationImg: player.nationImg,
      PAC: player.PAC,
      SHO: player.SHO,
      PAS: player.PAS,
      DRI: player.DRI,
      DEF: player.DEF,
      PHY: player.PHY,

    });
  }

  // Delete Student Object
  DeletePlayer(id: string) {
    this.playerRef = this.db.object('player-list/' + id);
    this.playerRef.remove();
  }

  deletePlayer(id: string){
    this.playerRef = this.db.object('player-list/' + id);
    this.playerRef.remove();
  }
}
