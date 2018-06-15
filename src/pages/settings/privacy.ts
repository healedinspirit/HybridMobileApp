import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-privacy',
  templateUrl: 'privacy.html'
})
export class PrivacyPage {

  constructor(public navCtrl: NavController, private ga: AnalyticsService) {
    this.ga.TrackView('Privacy');
  }

  GoHome() {
    this.navCtrl.setRoot(HomePage);
  }
  
}
