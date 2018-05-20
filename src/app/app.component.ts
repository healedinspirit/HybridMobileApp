import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { HeatPage } from '../pages/heat/heat';
import { CallusPage } from '../pages/callus/callus';
import { CutsPage } from '../pages/cuts/cuts';
import { PuncturesPage } from '../pages/punctures/punctures';
import { LumberPage } from '../pages/lumber/lumber';
import { PoisonPage } from '../pages/poison/poison';
import { WastePage } from '../pages/waste/waste';
import { AdhesivesPage } from '../pages/adhesives/adhesives';
import { QuickStartPage } from '../pages/intro/quickstart';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage: any = HomePage;
    pages: Array<{ title: string, component: any }>;
    healingPages: Array<{ title: string, component: any }>;
    cleansingPages: Array<{ title: string, component: any }>;
    
    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();
        
        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'Introduction', component: IntroPage },
            { title: 'Quick Start', component: QuickStartPage }
        ];

        this.healingPages = [
          { title: 'Heat', component: HeatPage },
            { title: 'Calluses', component: CallusPage },
            { title: 'Cuts', component: CutsPage },
            { title: 'Punctures', component: PuncturesPage }
        ];

        this.cleansingPages = [
            { title: 'Adhesives', component: AdhesivesPage },
            { title: 'Poison', component: PoisonPage },
            { title: 'Combustible Materials', component: LumberPage },
            { title: 'Waste Materials', component: WastePage }
        ];

    }
        
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
        
  openPage(page) {
    this.nav.setRoot(page.component);
    }
  
}
