import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  firstName:String;
  lastName:String;
  mailId:String;
  phoneNo:number;
  dob:String;
  gender:String;


  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.gender='M';
  }

  saveDetails(){
   
let userdetails = {
fName:this.firstName,
lName:this.lastName,
email:this.mailId,
phone:this.phoneNo,
dob:this.dob,
gender:this.gender
}
sessionStorage.setItem('user-detail',JSON.stringify(userdetails));

this.snackBar.open('Saved Successfully','',
    { 
      duration: 1000,
      panelClass: ['snackbar-success']
  });

  }
}
