import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-new-react',
  templateUrl: './new-react.component.html',
  styleUrls: ['./new-react.component.css']
})
export class NewReactComponent implements OnInit {
  loginform: FormGroup;

  constructor() { }

  get email(){
    return this.loginform.get('email')
  }

  get password(){
    return this.loginform.get('password')
  }

  ngOnInit() {


    this.loginform = new FormGroup({
      email : new FormControl('',[Validators.required]),
      password: new FormControl('',Validators.required)

    })

    
  }

}
 