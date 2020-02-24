import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-tem-form',
  templateUrl: './tem-form.component.html',
  styleUrls: ['./tem-form.component.css']
})
export class TemFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   loginForm(form:NgForm){
     console.log(form)
   }

}
