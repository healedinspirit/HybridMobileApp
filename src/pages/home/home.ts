import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IntroPage } from '../intro/intro';
import { QuickStartPage } from '../intro/quickstart';
import { TermsPage } from '../settings/terms';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AnalyticsService } from '../../services/analytics-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { GlobalService } from '../../services/global.service';
import { Pro } from '@ionic/pro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private pro = Pro.init('f9fd3452', { appVersion: '2.18.6' });

  constructor(public navCtrl: NavController,
    private ga: AnalyticsService,
    public splashScreen: SplashScreen,
    public sharing: SocialSharing,
    public global: GlobalService) {
      this.ga.TrackView('Home');
  
    }

  ionViewDidEnter() {
    this.splashScreen.hide();
  }

  GoToTerms() {
    this.navCtrl.push(TermsPage);
  }
  
  GoToIntro() {
      this.navCtrl.push(IntroPage);
  }

  GoToQuickStart() {
    this.navCtrl.push(QuickStartPage);
  }

  Share() {
    try {

    this.sharing.share("Get healed fast with Headed In Spirit! ", "You'll love this new app I found!", null, 'www.healedinspirit.com');
  
    }
    catch (e) {
      this.pro.monitoring.exception(new Error('Error in Home.Share(): ' + e));
    }
  }

  ShareToFacebook() {
    try {

      this.sharing.share('Check it out.', null, null, 'www.healedinspirit.com');
    }
    catch (e) {
      this.pro.monitoring.exception(new Error('Error in Home.ShareToFacebook(): ' + e));
    }
  }

  ShareToTwitter() {
      try {

        this.sharing.share('Check this app!', null, null, null);
      }
      catch (e) {
        this.pro.monitoring.exception(new Error('Error in Home.ShareToTwitter(): ' + e));
      }
  }

  ShareToEmail() {
    try {

      this.sharing.share('Check this app!', null, null, null);
    }
    catch (e) {
      this.pro.monitoring.exception(new Error('Error in Home.ShareToEmail(): ' + e));
    }
  }

  ShareToText() {

  }

}
