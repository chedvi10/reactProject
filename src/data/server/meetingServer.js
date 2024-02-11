import meetingStore from "../stores/meetingStore";
import axios from "axios";


async function getMeetings() {
    const meetings = await axios.get("http://localhost:8787/appointments");
    meetingStore.setMeetings(meetings.data);
}

const addMeetingToServer = async (meeting, closeForm, IsMake, date) => {
    try {
        const res = await axios.post("http://localhost:8787/appointment", meeting)

        if (res.status === 200) {
            meetingStore.addNewMeeting(meeting);
            closeForm(false);
            alert("The meeting was successfully set");
        }
    }
    catch (error) {
        if (error.response) {
            alert("the date catch");
            IsMake(false);
            date('');
        }
    }
}

export default { getMeetings, addMeetingToServer };
