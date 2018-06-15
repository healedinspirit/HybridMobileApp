import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-lumber',
  templateUrl: 'lumber.html'
})
export class LumberPage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
        this.ga.TrackView('Combustibles');
  }

    GoHome() {
      this.navCtrl.setRoot(HomePage);
    }
}
