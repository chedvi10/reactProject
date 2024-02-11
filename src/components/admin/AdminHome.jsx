import { observer } from "mobx-react"
import { useState } from "react";
import BusinessData from "../businessData/BusinessData"
import EditBusinessData from "../businessData/EditBusinessData";
import MeetingList from "../meeting/MeetingList";
import ServiceList from "../service/ServiceList";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";



const AdminHome = (observer(() => {
  const [isEdit, setIsEdit] = useState(false);
  const [isMeeting, setIsMeeting] = useState(false);
  const [isServices, setIsservices] = useState(false);
  const navigate = useNavigate();

  const handleClick1 = () => {
    setIsEdit(current => !current);
  }

  const handleClick2 = () => {
    setIsMeeting(current => !current);
    setIsservices(false);
  }
  const handleClick3 = () => {
    setIsservices(current => !current);
    setIsMeeting(false);
    navigate(":AddService");
  }
  return (
    <>
      <div className="details">
        <Card>
          <BusinessData />

          <button onClick={handleClick1} className="buttonEditDetails">edit</button>
          {isEdit && (
            <EditBusinessData setIsEdit2={setIsEdit} />
          )}
        </Card>
      </div>
      <br />
      <button onClick={handleClick2} className="buttonMeeting">meetings</button>
      <button onClick={handleClick3} className="buttonService">services</button>
      <br />
      <br />
      {isServices && (
        <ServiceList />
      )}
      {isMeeting && (
        <MeetingList />
      )}

      <br />
    </>
  )

}))

export default AdminHome