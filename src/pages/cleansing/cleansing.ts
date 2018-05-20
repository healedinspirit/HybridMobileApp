import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LumberPage } from '../lumber/lumber';
import { PoisonPage } from '../poison/poison';
import { WastePage } from '../waste/waste';
import { AdhesivesPage } from '../adhesives/adhesives';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-cleansing',
  templateUrl: 'cleansing.html'
})
export class CleansingPage {

    cleansingPages: Array<{ title: string, component: any }>;

    constructor(public navCtrl: NavController, private ga: AnalyticsService) {
        this.ga.TrackView('Cleansing Category Page');
      this.cleansingPages = [
          { title: 'Adhesives', component: AdhesivesPage },
          { title: 'Poison', component: PoisonPage },
          { title: 'Combustible Materials', component: LumberPage },
          { title: 'Waste Materials', component: WastePage }
      ];
    }

  GoToItem(item) {
      this.navCtrl.push(item.component);
  }
    
}
