import { Injectable } from '@angular/core';
//import { Pro } from '@ionic/pro';

@Injectable()
export class MonitoringService {

    //const IonicPro = Pro.init('f9fd3452', { appVersion: '0.0.1' });

    constructor() {
        //this.IonicPro = Pro.init('f9fd3452', { appVersion: '0.0.1' });
    }

    log(message: string) {
        console.log(message);
        //this.IonicPro.monitoring.log(message, { level: 'info' });
    }

    error(exception: string) {
        console.error(exception);
        //this.IonicPro.monitoring.exception(exception);
    }

}