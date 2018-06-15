import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-cuts',
  templateUrl: 'cuts.html'
})
export class CutsPage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
        this.ga.TrackView('Cuts');
  }

    GoHome() {
      this.navCtrl.setRoot(HomePage);
    }
}
