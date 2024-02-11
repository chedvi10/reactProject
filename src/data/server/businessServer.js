import businessStore from "../stores/businessStore";
import axios from "axios";

async function getBusiness() {
    const business = await axios.get("http://localhost:8787/businessData");
    console.log(business);
    businessStore.editDetails(business.data)
}
const putBusinessToServer = async (business) => {
    const res = await axios.post("http://localhost:8787/businessData", business)
    if (res.status === 200) {
        console.log('success');
        businessStore.editDetails(business);
    }
    else {
        console.log("faild");
    }
}

export default { getBusiness, putBusinessToServer };