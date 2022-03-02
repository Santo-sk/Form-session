import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginServiceService } from './service/login-service.service';
import { Router } from '@angular/router';
import { MatMessageService } from '../common/mat-message.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm:any;
  loggedUserId:any;
  loggedUserName:string;
  detailsLogged:any=[];
  constructor(private snackBar: MatSnackBar,private loginservice:LoginServiceService,private router:Router,
    private messageservice:MatMessageService) { }

  ngOnInit(): void {

    this.loginForm=new FormGroup({
      user_id:new FormControl('',[Validators.required]),
     passcode:new FormControl('',[Validators.required])
   })
  }

  checkLogin(){
  
    let user_id=this.loginForm.value['user_id'];
this.loginservice.loginUser(user_id).subscribe(data=>{
this.detailsLogged=JSON.stringify(data);
this.messageservice.showSuccess('Login Successfully');
this.router.navigate(['logged-page'],{ state:{ details:this.detailsLogged},
});

},(error)=>{
 this.messageservice.showError('Server Error')
});
  
  }


}
