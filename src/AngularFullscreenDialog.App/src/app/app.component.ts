import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HelloWorldComponent } from '@shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, MatDialogModule]
})
export class AppComponent implements OnInit {
  
  private readonly _dialog = inject(MatDialog);

  ngOnInit() {
    this._dialog.open(HelloWorldComponent)
    .afterClosed()
    .subscribe();
  }
}
