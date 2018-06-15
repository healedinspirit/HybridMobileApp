import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  public logs: string;

  constructor(public navCtrl: NavController,
    private ga: AnalyticsService) {
    this.ga.TrackView('Settings');
  }

  GoHome() {
    this.navCtrl.setRoot(HomePage);
  }
}
