import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {


  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: StorageService) {
  }

  ionViewDidLoad() {
    let LocalUser = this.storage.getLocalUser();
    if(localStorage && LocalUser.email) {
      this.email = LocalUser.email;
    }
  }

}