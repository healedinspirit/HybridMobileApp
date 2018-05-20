import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AdhesivesPage } from '../adhesives/adhesives';
import { LumberPage } from '../lumber/lumber';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-poison',
  templateUrl: 'poison.html'
})
export class PoisonPage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
        this.ga.TrackView('Poison');
  }
  
  GoBack() {
    this.navCtrl.push(AdhesivesPage);
  }
  GoHome() {
      this.navCtrl.setRoot(HomePage);
  }
  Next() {
    this.navCtrl.push(LumberPage);
  }
}
