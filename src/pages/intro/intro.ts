import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeatPage } from '../heat/heat';
import { HomePage } from '../home/home';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
        this.ga.TrackView('Introduction');
    }

  GetStarted() {
    this.navCtrl.push(HeatPage);
  }
  
  GoHome() {
    this.navCtrl.setRoot(HomePage);
  }
}
