import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { QuickStartPage } from '../pages/intro/quickstart';
import { HeatPage } from '../pages/heat/heat';
import { CallusPage } from '../pages/callus/callus';
import { CutsPage } from '../pages/cuts/cuts';
import { PuncturesPage } from '../pages/punctures/punctures';
import { LumberPage } from '../pages/lumber/lumber';
import { PoisonPage } from '../pages/poison/poison';
import { WastePage } from '../pages/waste/waste';
import { AdhesivesPage } from '../pages/adhesives/adhesives';
import { SettingsPage } from '../pages/settings/settings';
import { TermsPage } from '../pages/settings/terms';
import { PrivacyPage } from '../pages/settings/privacy';
import { MonitoringService } from '../services/monitoring-service';
import { AnalyticsService } from '../services/analytics-service';
import { GlobalService } from '../services/global.service';

export class AppErrorHandler implements ErrorHandler {
  private ga: GoogleAnalytics = new GoogleAnalytics();

  constructor() { }

  handleError(err: any): void {
    console.log(err);
    this.ga.startTrackerWithId('UA-109837237-1');
    this.ga.setAppVersion('1.5.2');
    this.ga.trackException(JSON.stringify(err), true);
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IntroPage,
    QuickStartPage,
    HeatPage,
    CallusPage,
    CutsPage,
    PuncturesPage,
    LumberPage,
    PoisonPage,
    WastePage,
    AdhesivesPage,
    SettingsPage,
    TermsPage,
    PrivacyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IntroPage,
    QuickStartPage,
    HeatPage,
    CallusPage,
    CutsPage,
    PuncturesPage,
    LumberPage,
    PoisonPage,
    WastePage,
    AdhesivesPage,
    SettingsPage,
    TermsPage,
    PrivacyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MonitoringService,
    GoogleAnalytics,
    AnalyticsService,
    NativePageTransitions,
    SocialSharing,
    GlobalService
    ,{ provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class AppModule { }
