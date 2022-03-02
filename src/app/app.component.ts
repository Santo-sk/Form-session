import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session-forms';

  constructor(private dialog: MatDialog,
    private router: Router) {

  }
  openLoginDialog() {
    this.dialog.open(LoginPageComponent)
  }

  //To navigate to register page using router.navigate method
  navigateRegisterPage() {
    this.router.navigate(['/', 'sign-page']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }

  //To navigate to login page using router.navigateByUrl method
  navigateLoginPage() {
    this.router.navigateByUrl('login-page');
  }
}
