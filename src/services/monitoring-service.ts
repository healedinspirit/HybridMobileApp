import { Injectable } from '@angular/core';
import { Pro } from '@ionic/pro';

@Injectable()
export class MonitoringService {

    public pro = Pro.init('f9fd3452', { appVersion: '0.6.1' });

    constructor() {
    }

    log(message: string) {
        console.log(message);
        this.pro.monitoring.log(message, { level: 'info' });
    }

    error(exception: string) {
        console.error(exception);
        this.pro.monitoring.exception(new Error(exception));
    }

}
