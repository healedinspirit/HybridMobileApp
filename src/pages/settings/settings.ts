import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
        this.ga.TrackView('Settings');
    }
    
}
