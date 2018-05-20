import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeatPage } from '../heat/heat';
import { CallusPage } from '../callus/callus';
import { CutsPage } from '../cuts/cuts';
import { PuncturesPage } from '../punctures/punctures';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-healing',
  templateUrl: 'healing.html'
})
export class HealingPage {

  healingPages: Array<{ title: string, component: any }>;
  constructor(public navCtrl: NavController, private ga: AnalyticsService) {
    this.ga.TrackView('Healing Category Page');
    this.healingPages = [
      { title: 'Heat', component: HeatPage },
      { title: 'Calluses', component: CallusPage },
      { title: 'Cuts', component: CutsPage },
      { title: 'Punctures', component: PuncturesPage }
    ];
  }

  GoToItem(item) {
    this.navCtrl.push(item.component);
  }

}
