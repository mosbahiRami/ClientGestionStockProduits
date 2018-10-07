import { Component, Input, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientGestionStockProduits';
  showHideSideBar = false;



  onShowSideBarChange(showHideSideBar) {
    this.showHideSideBar = showHideSideBar;

  }
}
