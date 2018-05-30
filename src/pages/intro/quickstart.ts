import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeatPage } from '../heat/heat';
import { HomePage } from '../home/home';
import { IntroPage } from '../intro/intro';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-quickstart',
  templateUrl: 'quickstart.html'
})
export class QuickStartPage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
      this.ga.TrackView('Quick Start');
    }

  GetStarted() {
    this.navCtrl.push(HeatPage);
  }

  GoToIntro() {
    this.navCtrl.setRoot(IntroPage);
  }
  GoHome() {
    this.navCtrl.push(HomePage);
  }
}
