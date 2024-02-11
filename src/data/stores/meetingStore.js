import { makeObservable, observable, action } from 'mobx';

class meetingStore {
    meetings = [];

    constructor() {
        makeObservable(this, {
            meetings: observable,
            setMeetings: action,
            addNewMeeting: action,
        })
    }
    setMeetings = (data) => {
        if (data.length > 0) {
            this.meetings = data;
            this.meetings.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
        }
    }

    addNewMeeting = (meeting) => {
        this.meetings = [...this.meetings, meeting];
    }
}

export default new meetingStore();