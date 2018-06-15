import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-heat',
  templateUrl: 'heat.html'
})
export class HeatPage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
        this.ga.TrackView('Heat');
    }

    GoHome() {
      this.navCtrl.setRoot(HomePage);
    }
}
