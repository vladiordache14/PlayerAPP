import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Student } from '../shared/student';
import { ToastrService } from 'ngx-toastr';
import { Player } from '../shared/player';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})

export class StudentListComponent implements OnInit {
  p: number = 1;
  playerFromDB: Player[];
  hideWhenNoPlayer: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public crudApi: CrudService, public toastr: ToastrService) {}

  ngOnInit() {
    this.dataState();
    let s = this.crudApi.GetPlayersList();
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
    this.crudApi
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

  deletePlayer(player) {
    if (window.confirm('Are sure you want to delete this student ?')) {
      this.crudApi.DeletePlayer(player.$key);
      this.toastr.success(player.name + ' successfully deleted!');
    }
  }
}
