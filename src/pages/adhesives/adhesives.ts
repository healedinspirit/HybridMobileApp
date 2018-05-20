import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PoisonPage } from '../poison/poison';
import { PuncturesPage } from '../punctures/punctures';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
    selector: 'page-adhesives',
    templateUrl: 'adhesives.html'
})
export class AdhesivesPage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService, public mdl: ModalController) {
        this.ga.TrackView('Adhesives');
    }
  
    GoBack() {
      this.navCtrl.push(PuncturesPage);
    }
    GoHome() {
        this.navCtrl.setRoot(HomePage);
    }
    Next() {
      this.navCtrl.push(PoisonPage);
    }
}
