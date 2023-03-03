import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { Component } from '@angular/core';
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
  ],
  providers: [
    HtmlElementService
  ]
})
export class HelloWorldComponent {
  private readonly _htmlElementService = inject(HtmlElementService);
}
