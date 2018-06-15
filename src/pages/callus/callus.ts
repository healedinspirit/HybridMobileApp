import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-callus',
  templateUrl: 'callus.html'
})
export class CallusPage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
        this.ga.TrackView('Calluses');
  }
  

    GoHome() {
      this.navCtrl.setRoot(HomePage);
    }

}
