import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HeatPage } from '../heat/heat';
import { CutsPage } from '../cuts/cuts';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-callus',
  templateUrl: 'callus.html'
})
export class CallusPage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
        this.ga.TrackView('Calluses');
  }
  

  GoBack() {
    this.navCtrl.push(HeatPage);
  }

  GoHome() {
      this.navCtrl.push(HomePage);
  }

  Next() {
    this.navCtrl.push(CutsPage);
  }

}
