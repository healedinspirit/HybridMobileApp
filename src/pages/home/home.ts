import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IntroPage } from '../intro/intro';
import { QuickStartPage } from '../intro/quickstart';
import { HeatPage } from '../heat/heat';
import { HealingPage } from '../healing/healing';
import { CleansingPage } from '../cleansing/cleansing';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { AnalyticsService } from '../../services/analytics-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private transitions: NativePageTransitions, private ga: AnalyticsService, public splashScreen: SplashScreen) {
      this.ga.TrackView('Home');
  
    }

  ionViewDidEnter() {
    this.splashScreen.hide();
  }

  LearnMore() {
      this.navCtrl.push(IntroPage);
  }

  GetStarted() {
    this.navCtrl.push(HeatPage);
  }

  GoToCleansing() {
      this.navCtrl.setRoot(CleansingPage);
  }
  
  GoToIntro() {
      this.navCtrl.setRoot(IntroPage);
  }

  GoToQuickStart() {
    this.navCtrl.setRoot(QuickStartPage);
  }
}
