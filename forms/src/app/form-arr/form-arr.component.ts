import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-form-arr',
  templateUrl: './form-arr.component.html',
  styleUrls: ['./form-arr.component.css']
})
export class FormArrComponent implements OnInit {
  empForm: FormGroup;

  constructor() { }

  ngOnInit() {


    this.empForm = new FormGroup({
      empName : new FormControl('',
        [
          Validators.minLength(3),
          Validators.maxLength(30),
          Validators.required
        ]),
      empAge : new FormControl(),
      empSkills: new FormArray([
        new FormControl(),
        new FormControl()
      ])
    });
  }

  addSkill() {
    (this.empForm.get('empSkills') as FormArray).push(new FormControl());
  }

  removeSkill(i: number) {
    (this.empForm.get('empSkills') as FormArray).removeAt(i);
  }

  printForm() {
    console.log(this.empForm.value);
    this.empForm.reset();
  }

}

  
