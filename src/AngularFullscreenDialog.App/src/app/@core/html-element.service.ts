import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class HtmlElementService implements OnDestroy {

  static HIDE_OVERFLOW_CSS_CLASS = "--hide-overflow";

  private get _rootHtmlElement() {
    return this._document.documentElement;
  }

  constructor(
    @Inject(DOCUMENT) private readonly _document: Document
  ) { 
    if(!this._rootHtmlElement.classList.contains(HtmlElementService.HIDE_OVERFLOW_CSS_CLASS)) {
      this._rootHtmlElement.classList.add(HtmlElementService.HIDE_OVERFLOW_CSS_CLASS);
    }
  }


  public ngOnDestroy() {
    this._rootHtmlElement.classList.remove(HtmlElementService.HIDE_OVERFLOW_CSS_CLASS)
  }
}
