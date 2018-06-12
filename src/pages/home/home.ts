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

  GoToTerms() { }
  
  GoToIntro() {
      this.navCtrl.push(IntroPage);
  }

  GoToQuickStart() {
    this.navCtrl.push(QuickStartPage);
  }

  Share() {
    this.sharing.share("Get healed fast with Headed In Spirit! ", "You'll love this new app I found!", null, 'www.healedinspirit.com');
  }

  ShareToFacebook() {
      this.sharing.share('Check it out.', null, null, 'www.healedinspirit.com');
  }

  ShareToTwitter() {
    this.sharing.share('Check this app!', null, null, null);
  }

  ShareToEmail() {
    this.sharing.share('Check this app!', null, null, null);
  }

  ShareToText() {

  }

}
