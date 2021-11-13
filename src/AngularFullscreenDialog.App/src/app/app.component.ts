import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelloWorldComponent } from '@shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly _dialog: MatDialog
  ) { }

  ngOnInit() {
    this._dialog.open(HelloWorldComponent, {
      //panelClass:'g-hello-world-dialog-panel'
    })
    .afterClosed()
    .subscribe();
  }
}
