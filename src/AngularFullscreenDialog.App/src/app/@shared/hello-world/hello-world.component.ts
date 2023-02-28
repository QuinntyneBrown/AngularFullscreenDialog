import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HtmlElementService } from '@core/html-element.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class HelloWorldComponent implements OnInit, OnDestroy {

  private readonly _htmlElementService = inject(HtmlElementService);

  ngOnInit(): void {
    this._htmlElementService.hideOverflow();
  }

  ngOnDestroy(): void {
    this._htmlElementService.unhideOverflow();
  }
}
