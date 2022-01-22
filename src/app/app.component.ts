import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginPageComponent } from './login-page/login-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session-forms';

  constructor(private dialog:MatDialog){

  }
  openLoginDialog(){
this.dialog.open(LoginPageComponent)
  }
}
