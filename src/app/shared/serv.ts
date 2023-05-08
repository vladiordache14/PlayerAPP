import { Injectable } from '@angular/core';
import {Firestore, addDoc, collection, collectionData, deleteDoc, deleteField, doc} from '@angular/fire/firestore'


import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Player } from './player';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // playersRef!: AngularFireList<any>;
  // playerRef!: AngularFireObject<any>;
  // constructor() {}
  constructor(private firestore: Firestore) { }

  getPlayers(): Observable<Player[]>{
    const myCollection: any = collection(this.firestore,'players');
    return collectionData(myCollection);
  }

  addPlayer(player: Player){
    const myCollection = collection(this.firestore,'players');
    addDoc(myCollection, player);
   
  }


  deletePlayer(name: string){
    const docRef = doc(this.firestore, 'players', name)
    deleteDoc(docRef);
    console.log("deleting", name)
  
   
}
  
}