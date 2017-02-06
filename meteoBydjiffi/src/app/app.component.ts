import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home.ts';
import { MenuController } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
  rootPage = HomePage;

  constructor(platform: Platform, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  openMenu() {
     this.menuCtrl.open();
   }
  goHome(){
    this.nav.push(HomePage);
  }
  closeMenu() {
  this.menuCtrl.close();
}

toggleMenu() {
  this.menuCtrl.toggle();
}
}
