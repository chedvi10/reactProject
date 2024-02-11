import { makeObservable, observable, action } from 'mobx';
import axios from "axios";


class servicesStore {
    services = [];
    arrServices = [];
    constructor() {
        makeObservable(this, {
            services: observable,
            setServices: action,
            addNewService: action,
            arrServices: observable,
        })
    }

    setServices = (data) => {
        if (data.length > 0) {
            this.services = data;
            this.arrServices = this.services.map(service => (service.name));
        }

    }

    addNewService = (service) => {
        this.services = [...this.services, service];
        this.arrServices = [...this.arrServices, service];
    }
}

export default new servicesStore();

