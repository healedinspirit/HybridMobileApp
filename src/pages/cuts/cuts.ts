import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CallusPage } from '../callus/callus';
import { PuncturesPage } from '../punctures/punctures';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-cuts',
  templateUrl: 'cuts.html'
})
export class CutsPage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
        this.ga.TrackView('Cuts');
  }
  
  GoBack() {
    this.navCtrl.push(CallusPage);
  }
  GoHome() {
      this.navCtrl.push(HomePage);
  }
  Next() {
    this.navCtrl.push(PuncturesPage);
  }
}
