import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IntroPage } from '../intro/intro';
import { QuickStartPage } from '../intro/quickstart';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AnalyticsService } from '../../services/analytics-service';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private ga: AnalyticsService,
    public splashScreen: SplashScreen,
    public sharing: SocialSharing) {
      this.ga.TrackView('Home');
  
    }

  ionViewDidEnter() {
    this.splashScreen.hide();
  }
  
  GoToIntro() {
      this.navCtrl.push(IntroPage);
  }

  GoToQuickStart() {
    this.navCtrl.push(QuickStartPage);
  }
  
  ShareToFacebook() {
    this.sharing.shareViaFacebook('Check this app!', null, 'www.healedinspirit.com');
  }

  ShareToTwitter() {
    this.sharing.shareViaTwitter('', null, 'www.healedinspirit.com');
  }

  ShareToEmail() {
    this.sharing.shareViaEmail('/n/n/n http://www.healedinspirit.com', 'Check this app!', null);
  }

}
