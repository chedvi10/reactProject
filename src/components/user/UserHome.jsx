import { Card } from "@mui/material";
import BusinessData from "../businessData/BusinessData";
import ServiceList from "../service/ServiceList";

function UserHome() {


    return (
        <>
            <div className="details">
                <Card>
                    <BusinessData></BusinessData>
                </Card>
            </div>
            <ServiceList></ServiceList>
        </>
    )
}

export default UserHome