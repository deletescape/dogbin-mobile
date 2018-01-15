import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PastePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paste',
  templateUrl: 'paste.html',
})
export class PastePage {
  buttons: any = [
    {
      enabled: false,
      icon: 'logo-twitter'
    },
    {
      enabled: false,
      icon: 'document'
    },
    {
      enabled: false,
      icon: 'copy'
    },
    {
      enabled: true,
      icon: 'add',
      onClick: this.newPaste
    },
    {
      enabled: true,
      icon: 'bookmark',
      onClick: this.savePaste
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastePage');
  }
  newPaste() {

  }
  savePaste() {

  }
}
