import { Injectable } from '@angular/core';

@Injectable()
export class LayoutService {

  headerIsVisible: Boolean;
  footerIsVisible: Boolean;
  menuIsVisible: Boolean;

  constructor() {
    this.headerIsVisible = true;
    this.footerIsVisible = true;
    this.menuIsVisible = true;
   }

   hideHeader() { this.headerIsVisible = false; }
   showHeader() { this.headerIsVisible = true; }

   hideFooter() { this.footerIsVisible = false; }
   showFooter() { this.footerIsVisible = true; }

   hideMenu() { this.menuIsVisible = false; }
   showMenu() { this.menuIsVisible = true; }
}
