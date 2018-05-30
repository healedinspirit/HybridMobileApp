import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LumberPage } from '../lumber/lumber';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-waste',
  templateUrl: 'waste.html'
})
export class WastePage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
        this.ga.TrackView('Waste');
  }
  
  GoBack() {
      this.navCtrl.push(LumberPage);
  }
  GoHome() {
      this.navCtrl.push(HomePage);
  }
  Next() {
      this.navCtrl.push(HomePage);
  }
}
