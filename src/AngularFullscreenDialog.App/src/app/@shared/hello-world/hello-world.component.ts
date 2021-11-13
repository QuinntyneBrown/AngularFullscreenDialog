import { Component, OnDestroy, OnInit } from '@angular/core';
import { HtmlElementService } from '@core/html-element.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit, OnDestroy {

  constructor(
    private readonly _htmlElementService: HtmlElementService
  ) { }

  ngOnInit(): void {
    this._htmlElementService.hideOverflow();
  }

  ngOnDestroy(): void {
    this._htmlElementService.unhideOverflow();
  }
}
