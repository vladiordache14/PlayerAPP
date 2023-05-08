import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../shared/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
})

export class EditStudentComponent implements OnInit {
  editplayerForm: FormGroup;

  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.updateStudentData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetPlayer(id)
      .valueChanges()
      .subscribe((data) => {
        this.editplayerForm.setValue(data);
      });
  }

  get name() {
    return this.editplayerForm.get('name');
  }

  get nationImg() {
    return this.editplayerForm.get('nationImg');
  }

  get playerImg() {
    return this.editplayerForm.get('playerImg');
  }

  get rating() {
    return this.editplayerForm.get('rating');
  }
  get position() {
    return this.editplayerForm.get('position');
  }
  get PAC() {
    return this.editplayerForm.get('PAC');
  }
  get SHO() {
    return this.editplayerForm.get('SHO');
  }
  get PAS() {
    return this.editplayerForm.get('PAS');
  }
  get DRI() {
    return this.editplayerForm.get('DRI');
  }
  get DEF() {
    return this.editplayerForm.get('DEF');
  }
  get PHY() {
    return this.editplayerForm.get('PHY');
  }
  get clubImg() {
    return this.editplayerForm.get('clubImg');
  }
  updateStudentData() {
    this.editplayerForm = this.fb.group({
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

  goBack() {
    this.location.back();
  }

  updateForm() {
    this.crudApi.UpdatePlayer(this.editplayerForm.value);
    // this.toastr.success(
    //   this.editplayerForm.controls['firstName'].value + ' updated successfully'
    // );
    this.router.navigate(['view-students']);
  }
}
