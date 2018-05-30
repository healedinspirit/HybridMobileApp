import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Pro } from '@ionic/pro';

import { StatusBar } from '@ionic-native/status-bar';
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
import { MonitoringService } from '../services/monitoring-service';
import { AnalyticsService } from '../services/analytics-service';

export class AppErrorHandler implements ErrorHandler {
  private IonicPro = Pro.init('f9fd3452', { appVersion: '2.018.6' });
  constructor() { }

  handleError(err: any): void {
    console.log(err);
    this.IonicPro.monitoring.exception(err);
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
    AdhesivesPage
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
    AdhesivesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MonitoringService,
    GoogleAnalytics,
    AnalyticsService,
    NativePageTransitions,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class AppModule { }
