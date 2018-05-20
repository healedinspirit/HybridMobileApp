import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CutsPage } from '../cuts/cuts';
import { AdhesivesPage } from '../adhesives/adhesives';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-punctures',
  templateUrl: 'punctures.html'
})
export class PuncturesPage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
        this.ga.TrackView('Punctures');
  }
  
  GoBack() {
    this.navCtrl.push(CutsPage);
  }
  GoHome() {
      this.navCtrl.setRoot(HomePage);
  }
  Next() {
    this.navCtrl.push(AdhesivesPage);
  }
}
