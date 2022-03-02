import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterServiceService } from './service/register-service.service';
import { Router } from '@angular/router';
import { MatMessageService } from '../common/mat-message.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  showLoading:boolean;

  userForm: NgForm | undefined;

  constructor(private registerservice:RegisterServiceService,private router:Router,
    private messageService:MatMessageService) { }

  ngOnInit(): void {
   
  }

  onSubmit(userForm){

    this.showLoading=true;

   const formDetails = userForm.value;
   console.log(formDetails);
   this.registerservice.registerUser(formDetails).subscribe(res =>{
    this.messageService.showSuccess('Registered Successfully');

  this.showLoading=false;
  this.router.navigateByUrl('home-page');
   },
   error=>{
    this.messageService.showError('Server Error');
  this.showLoading=false;
   })


  
  }
}
