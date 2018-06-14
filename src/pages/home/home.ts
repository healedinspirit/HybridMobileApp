import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
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
    this.pro.monitoring.exception(new Error('Error in Home.Share()'));
    let options = {
      message: "Get healed fast with Headed In Spirit! ", // not supported on some apps (Facebook, Instagram)
      subject: "You'll love this new app I found!", // fi. for email
      files: null, // an array of filenames either locally or remotely
      url: 'http://www.healedinspirit.com',
      chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
    };
      this.sharing.shareWithOptions(options)
        .then(() => {
          this.toast('You clicked Share.');
        })
        .catch((e) => {
          this.toast('Error in Share: ' + e);
        });
  }

  ShareToFacebook() {
      this.pro.monitoring.exception(new Error('Error in Home.ShareToFacebook()'));
      this.sharing.shareViaFacebook('Check this app!', null, 'www.healedinspirit.com')
        .then(() => {
          this.toast('You clicked ShareToFacebook.');
        })
        .catch((e) => {
          this.toast('Error in ShareToFacebook: ' + e);
        });
    
  }

  ShareToTwitter() {
    this.pro.monitoring.exception(new Error('Home.ShareToTwitter()'));
    this.sharing.shareViaTwitter('Check this app!', null, 'www.healedinspirit.com')
          .then(() => {
            this.toast('You clicked ShareToTwitter.');
          })
          .catch((e) => {
            this.toast('Error in ShareToTwitter: ' + e);
          });
  }

  ShareToEmail() {
      this.pro.monitoring.exception(new Error('Error in Home.ShareToEmail()'));
      this.sharing.shareViaEmail("Get healed fast with Headed In Spirit! ", "You'll love this new app I found!", null, null, null, null)
        .then(() => {
          this.toast('You clicked ShareToEmail.');
        })
        .catch((e) => {
          this.toast('Error in Share: ' + e);
        });
  }

  ShareToText() {

  }

  toast(message: string) {
    let aToast = this.toaster.create({
      message: message,
      duration: 10000,
      position: 'top'
    });

    aToast.present();
  }

}
