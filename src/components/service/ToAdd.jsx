import AddService from "./AddService"
import { useState } from "react";

function ToAdd() {

    const [addService, setAddService] = useState(false);

    const handleClick = () => {
        setAddService(current => !current);
    }

    return (
        <>
            <button onClick={handleClick}>Add service</button>
            {addService && (
                <AddService setAddService2={setAddService} />
            )}
        </>
    )
}
export default ToAdd