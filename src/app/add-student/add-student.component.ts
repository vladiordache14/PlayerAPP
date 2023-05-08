import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})

export class AddStudentComponent implements OnInit {
  public playerForm: FormGroup;

  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ) {}

  ngOnInit() {
    this.crudApi.GetPlayersList();
    this.playForm();
  }

  playForm() {
    this.playerForm = this.fb.group({
      name: [''],
      nationImg: [''],
      playerImg: [''],
      clubImg: [''],
      position: [''],
      rating: [''],
      PAC: [''],
      SHO: [''],
      PAS: [''],
      DRI: [''],
      DEF: [''],
      PHY: [''],


      
    });
  }

  get name() {
    return this.playerForm.get('name');
  }

  get nationImg() {
    return this.playerForm.get('nationImg');
  }

  get playerImg() {
    return this.playerForm.get('playerImg');
  }

  get rating() {
    return this.playerForm.get('rating');
  }
  get position() {
    return this.playerForm.get('position');
  }
  get PAC() {
    return this.playerForm.get('PAC');
  }
  get SHO() {
    return this.playerForm.get('SHO');
  }
  get PAS() {
    return this.playerForm.get('PAS');
  }
  get DRI() {
    return this.playerForm.get('DRI');
  }
  get DEF() {
    return this.playerForm.get('DEF');
  }
  get PHY() {
    return this.playerForm.get('PHY');
  }
  get clubImg() {
    return this.playerForm.get('clubImg');
  }

  ResetForm() {
    this.playerForm.reset();
  }

  submitPlayerData() {
    this.crudApi.AddStudent(this.playerForm.value);
    // this.toastr.success(
    //   this.playerForm.controls['Name'].value + ' successfully added!'
    // );
    console.log("added");
    this.ResetForm();
  }
}
