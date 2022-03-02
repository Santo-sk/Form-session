import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MatMessageService {
  snackBarClose="X";

  constructor(private snackbar:MatSnackBar) { }

  // To show Red theme Error snack bar
  showError(message: string) {
    this.showSnackBar(message, 'snack-bar-error');
  }

showSuccess(message:string){
  this.showSnackBar(message,'snack-bar-success');
}

  private showSnackBar(message: string, type: string, duration?: number) {
    this.snackbar.open(message, this.snackBarClose, {
      duration:1000,
      panelClass: type,
      verticalPosition: 'top'
    });
  }

   // To close the snack bar
   closeMessage() {
    this.snackbar.dismiss();
  }
}
