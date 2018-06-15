import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-waste',
  templateUrl: 'waste.html'
})
export class WastePage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
        this.ga.TrackView('Waste');
  }

    GoHome() {
      this.navCtrl.setRoot(HomePage);
    }
}
