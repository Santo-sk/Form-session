import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm:any;
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.loginForm=new FormGroup({
     firstName:new FormControl('',[Validators.required,Validators.maxLength(5)]),
     lastname:new FormControl('',[Validators.required]),
     mailId:new FormControl('',[Validators.required]),
     passcode:new FormControl('',[Validators.required]),
     contactNo:new FormControl('',[Validators.required]),
     dob:new FormControl('',[Validators.required])
   })
  }

  onSubmit(){
    console.log(this.loginForm.value)
    this.snackBar.open('Saved Successfully','',
    { 
      duration: 2000,
      panelClass: ['snackbar-success'],
      verticalPosition: 'top'
  });
  }

}
