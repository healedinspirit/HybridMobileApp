import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-quickstart',
  templateUrl: 'quickstart.html'
})
export class QuickStartPage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
      this.ga.TrackView('Quick Start');
    }

    GoHome() {
      this.navCtrl.setRoot(HomePage);
    }
}
