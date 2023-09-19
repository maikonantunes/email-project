import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-project';
  public username:any
  public password:any


  alertShow(){
  alert(this.username + this.password)
  }
  
}



