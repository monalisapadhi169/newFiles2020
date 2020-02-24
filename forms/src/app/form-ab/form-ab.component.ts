import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-ab',
  templateUrl: './form-ab.component.html',
  styleUrls: ['./form-ab.component.css']
})
export class FormAbComponent implements OnInit {


  empForm : FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.empForm = this.fb.group({
      empName:this.fb.control('',
      [
        Validators.minLength(5),
        Validators.maxLength(15),
        Validators.required
      ]),
      empAge:this.fb.control(''),
      empSkills:this.fb.array([
        this.skills()
      ])
    });
  }

  skills(): FormGroup{
    return this.fb.group({
     skills:this.fb.control(''),
     proficiency:this.fb.control('')
    })
  }

  addSkills() {
    (this.empForm.get('empSkills') as FormArray).push(this.skills());
  }

  removeSkill(i: number) {
    (this.empForm.get('empSkills') as FormArray).removeAt(i);
  }

  printForm() {
  console.log(this.empForm.value);
  this.empForm.reset();
  }

}
