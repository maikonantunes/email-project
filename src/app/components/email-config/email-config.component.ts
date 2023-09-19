import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';
import { SMTPClient } from 'emailjs';
@Component({
  selector: 'app-email-config',
  templateUrl: './email-config.component.html',
  styleUrls: ['./email-config.component.css']
})
export class EmailConfigComponent implements OnInit {
  @ViewChild(EmailEditorComponent)
  private emailEditor:any
  public client:any
  public to:any
  public from:any
  constructor(

  ) { 
  
  }
  ngOnInit() {
this.emailEditor=EmailEditorComponent
  }

  sendMsg(from:any,to:any){
    let html:any
    this.emailEditor.exportHtml((data:any) =>html=data);
    this.client.send(
      {
        text: 'Teste',
        from: from,
        to: to,
        cc: 'else <else@your-email.com>',
        subject: 'Teste',
        attachment: [
          {
            data:html
          }]
      },
      (err: any, message: any) => {
        console.log(err || message);
      }
    );
  }
  exportHtml() {
    this.emailEditor.exportHtml((data:any) => console.log('exportHtml', data));
  }

  editorLoaded(event:any){

  }

      // this.client = new SMTPClient({
    //   user: 'devinicante@gmail.com',
    //   password: 'mzua quzk cnuc meeo',
    //   host: 'smtp.gmail.com',
    //   port: 465,
    //   ssl: true,
    // });

}
