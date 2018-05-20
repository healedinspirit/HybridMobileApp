import { Injectable } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics';


@Injectable()
export class AnalyticsService {

    constructor(private ga: GoogleAnalytics) {
    }

    TrackView(view: string) {
        this.ga.startTrackerWithId('UA-109837237-1');
        this.ga.setAppVersion('2.018.5');
        this.ga.trackView(view);
    }

}
