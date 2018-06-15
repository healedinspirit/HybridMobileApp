import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html'
})
export class TermsPage {

  constructor(public navCtrl: NavController, private ga: AnalyticsService, public mdl: ModalController) {
    this.ga.TrackView('Terms');
  }

  GoHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
