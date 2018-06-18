import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { IntroPage } from '../intro/intro';
import { QuickStartPage } from '../intro/quickstart';
import { TermsPage } from '../settings/terms';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AnalyticsService } from '../../services/analytics-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { GlobalService } from '../../services/global.service';
//import { Pro } from '@ionic/pro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //private pro = Pro.init('f9fd3452', { appVersion: '0.6.1' });

  constructor(public navCtrl: NavController,
    private ga: AnalyticsService,
    public splashScreen: SplashScreen,
    public sharing: SocialSharing,
    public global: GlobalService,
    public toaster: ToastController) {
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
    let options = {
      message: "Get healed fast with Headed In Spirit! ",
      subject: "You'll love this app!",
      files: null,
      url: 'http://www.healedinspirit.com',
      chooserTitle: 'Pick an app'
    };
    this.sharing.shareWithOptions(options);
  }

  toast(message: string) {
    let aToast = this.toaster.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    aToast.present();
  }

}
