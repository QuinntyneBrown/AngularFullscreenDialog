import { DOCUMENT } from '@angular/common';
import { inject, Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class HtmlElementService implements OnDestroy {

  private readonly _document = inject(DOCUMENT);

  static HIDE_OVERFLOW_CSS_CLASS = "--hide-overflow";

  private get _rootHtmlElement() {
    return this._document.documentElement;
  }

  constructor() {
    if(!this._rootHtmlElement.classList.contains(HtmlElementService.HIDE_OVERFLOW_CSS_CLASS)) {
      this._rootHtmlElement.classList.add(HtmlElementService.HIDE_OVERFLOW_CSS_CLASS);
    }    
  }

  public ngOnDestroy() {
    this._rootHtmlElement.classList.remove(HtmlElementService.HIDE_OVERFLOW_CSS_CLASS)
  }
}
