import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlElementService {

  private readonly _hideOverflowCssClass = "--hide-overflow";

  private get _htmlElement() {
    return this._document.querySelector("html");
  }
  constructor(
    @Inject(DOCUMENT) private readonly _document: Document
  ) { }

  public hideOverflow() {
    if(!this._htmlElement.classList.contains(this._hideOverflowCssClass)) {
      this._htmlElement.classList.add(this._hideOverflowCssClass);
    }
  }

  public unhideOverflow() {
    this._htmlElement.classList.remove(this._hideOverflowCssClass)
  }
}
