import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PoisonPage } from '../poison/poison';
import { WastePage } from '../waste/waste';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-lumber',
  templateUrl: 'lumber.html'
})
export class LumberPage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
        this.ga.TrackView('Combustibles');
  }
  
  GoBack() {
    this.navCtrl.push(PoisonPage);
  }
  GoHome() {
      this.navCtrl.push(HomePage);
  }
  Next() {
    this.navCtrl.push(WastePage);
  }
}
