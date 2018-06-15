import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-poison',
  templateUrl: 'poison.html'
})
export class PoisonPage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
        this.ga.TrackView('Poison');
  }

    GoHome() {
      this.navCtrl.setRoot(HomePage);
    }
}
