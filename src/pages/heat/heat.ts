import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallusPage } from '../callus/callus';
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

  GoBack() {
  
  }

  GoHome() {
      this.navCtrl.setRoot(HomePage);
  }
  Next() {
    this.navCtrl.push(CallusPage);
  }
}
