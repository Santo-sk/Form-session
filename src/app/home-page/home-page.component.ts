import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  showFiller = false;
  constructor(private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  showSignUp(){

    //this.router.navigateByUrl('/sign-page')
    //const dialogRef = this.dialog.open(SignUpComponent);

    

  }
}
