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
  private pro = Pro.init('f9fd3452', { appVersion: '0.6.1' });

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
      this.pro.monitoring.exception(new Error('Error in Home.Share()'));
    this.sharing.share("Get healed fast with Headed In Spirit! ", "You'll love this new app I found!", null, 'www.healedinspirit.com');
  }

  ShareToFacebook() {
      this.pro.monitoring.exception(new Error('Error in Home.ShareToFacebook()'));
      this.sharing.share('Check it out.', null, null, 'www.healedinspirit.com');
    
  }

  ShareToTwitter() {
        this.pro.monitoring.exception(new Error('Home.ShareToTwitter()'));
        this.sharing.share('Check this app!', null, null, null);
  }

  ShareToEmail() {
      this.pro.monitoring.exception(new Error('Error in Home.ShareToEmail(): ' + e));
      this.sharing.share('Check this app!', null, null, null);
  }

  ShareToText() {

  }

}
