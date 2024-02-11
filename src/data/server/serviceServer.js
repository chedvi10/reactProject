import serviceStore from "../stores/serviceStore"
import axios from "axios";


async function getServices() {
    //get from server
    //const res = await axios or fetch /services - GET
    const services = await axios.get("http://localhost:8787/services");

    //set in mobX
    serviceStore.setServices(services.data);
}

const addServiceToServer = async (service) => {
    //post to server
    //const res = await axios or fetch /service - POST
    const res = await axios.post("http://localhost:8787/service", service);

    if (res.status === 200) {
        serviceStore.addNewService(service);
        console.log('success');
    }
    //if OK -> update mobX
    else {
        console.log('failed')
    }
    //else -> return failed to AddServiceCMP
}
export default { getServices, addServiceToServer };