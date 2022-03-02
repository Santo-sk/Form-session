import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoginPageComponent } from './../login-page/login-page.component';

@Component({
  selector: 'app-logged-in-page',
  templateUrl: './logged-in-page.component.html',
  styleUrls: ['./logged-in-page.component.css']
})
export class LoggedInPageComponent implements OnInit {

empFname:any;
empLname:string;
empMail:string;
empPhone:any;
empID:number;
empDob:any;
empGender:string;

fetchedDetails:any=[];
convertedResponse:any;

  constructor(private router:Router,private route:ActivatedRoute) { 


     this.fetchedDetails= this.router.getCurrentNavigation().extras.state.details;
    console.log('succes',this.fetchedDetails);
  }


  ngOnInit(): void {
    

console.log('conveted',this.fetchedDetails);

this.convertedResponse=JSON.parse(this.fetchedDetails);

this.empFname=this.convertedResponse['firstName'];
this.empLname=this.convertedResponse['lastName'];
this.empPhone=this.convertedResponse['phone'];
this.empMail=this.convertedResponse['mail'];
this.empDob=this.convertedResponse['dob'];
this.empGender=this.convertedResponse['gender'];
this.empID=this.convertedResponse['userId'];

console.log('name',this.empMail)
  
  }
 

}
