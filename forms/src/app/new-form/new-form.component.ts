import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 submitForm(form : NgForm){
   console.log(form)
 }
}
