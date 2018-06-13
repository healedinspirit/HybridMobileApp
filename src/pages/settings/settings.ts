import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AnalyticsService } from '../../services/analytics-service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  public logs: string;

  constructor(public navCtrl: NavController,
    private ga: AnalyticsService,
    public global: GlobalService) {
    this.ga.TrackView('Settings');
    this.global.logData$.subscribe(logs => this.logs = logs);
  }

  GoHome() {
    this.navCtrl.push(HomePage);
  }
}
