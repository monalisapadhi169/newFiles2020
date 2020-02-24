import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginForm(form : NgForm) {
    console.log(form)
  }

}
