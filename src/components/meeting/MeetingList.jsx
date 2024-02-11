import { useEffect } from "react";
import meetingServer from "../../data/server/meetingServer";
import meetingStore from "../../data/stores/meetingStore";
import { observer } from "mobx-react";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const MeetingList = (observer(() => {

  useEffect(() => {
    meetingServer.getMeetings();
  }, []);

  const arr = meetingStore.meetings;

  function checkColor(dateTime) {
    const currentDate = new Date();
    const meetingDate = new Date(dateTime);

    const lastDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 7);
    if (meetingDate.getDate() === currentDate.getDate() &&
      meetingDate.getMonth() === currentDate.getMonth() &&
      meetingDate.getFullYear() === currentDate.getFullYear())
      return 'rgb(246, 90, 90)';
    if (meetingDate > currentDate && meetingDate <= lastDayOfWeek)
      return 'rgb(255, 210, 128)'
    return 'rgb(112, 200, 112)';
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
  }));

  const getTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
    return formattedDate;
  }


  return (
    <>
      <div id="list"> {
        arr.map((meeting, i) =>
          <Item key={i} sx={{ backgroundColor: checkColor(meeting.dateTime) }} className="item">
            Appointment:
            <br />
            Type of service: {meeting.typeService}
            <br />
            Date: {getTime(meeting.dateTime)}
            <br />
            Client name: {meeting.nameClient}
            <br />
            Client email: {meeting.mail}
            <br />
          </Item>
        )
      }
      </div>
    </>
  )
}))

export default MeetingList
