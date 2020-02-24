import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form:FormGroup

  constructor() { }

  
getEmail(){
  return this.form.get('email')
}

getPassword(){
  return this.form.get('password')
}

  ngOnInit() {

    this.form = new FormGroup({
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',Validators.minLength(4))
    })
  }





}
