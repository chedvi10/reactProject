import { makeObservable, action, observable } from 'mobx';

class businessStore {
    details = {
        name: 'R Klopman',
        address: 'Ashdod',
        mail: 'klopman6@gmail.com',
        phone: '058-3213255',
    }
    constructor() {
        makeObservable(this, {
            details: observable,
            editDetails: action,
        })
    }
    editDetails(detailsToUpDait) {
        if (detailsToUpDait.name != null && detailsToUpDait.address != null && detailsToUpDait.mail != null && detailsToUpDait.phone != null) {
            this.details = detailsToUpDait;
        }
    }

}

export default new businessStore();