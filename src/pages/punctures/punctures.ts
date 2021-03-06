import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-punctures',
  templateUrl: 'punctures.html'
})
export class PuncturesPage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
        this.ga.TrackView('Punctures');
  }

    GoHome() {
      this.navCtrl.setRoot(HomePage);
    }
}
