import { useState } from "react"
import { observer } from "mobx-react"
import meetingServer from "../../data/server/meetingServer"
import serviceStore from "../../data/stores/serviceStore";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


const AddMeeting = (observer((props) => {
  const [nameClient, setNameClient] = useState('');
  const [tel, setTel] = useState('');
  const [mail, setMail] = useState('');
  const [typeService, setTypeService] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [isMakeMeeting, setIsMakeMeeting] = useState(true);

  const today = new Date();
  function checkDate(dateMeet) {
    return today < dateMeet
  }


  const handleAddMeeting = (e) => {
    e.preventDefault();
    if (checkDate(dateTime) == false) {
      alert("the date post");
      setIsMakeMeeting(false)
      setDateTime('');
      return;
    }
    const newMeeting = { nameClient, tel, mail, typeService, dateTime };
    console.log(newMeeting);
    meetingServer.addMeetingToServer(newMeeting, props.setAddMeeting2, setIsMakeMeeting, setDateTime);
    setDateTime('');
  }

  let a = ""
  if (isMakeMeeting === false) { a = "red" }
  else { a = "" }


  return (
    <>
      <form onSubmit={handleAddMeeting} className='popup heightM'>
        <h3>add meeting:</h3>

        <TextField
          label="name of client: "
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
          type='text' value={nameClient} onChange={(e) => setNameClient(e.target.value)}
        />
        <TextField
          label="tel: "
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
          type='text' value={tel} onChange={(e) => setTel(e.target.value)}
        />
        <TextField
          label="mail"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
          type='email' value={mail} onChange={(e) => setMail(e.target.value)}
        />
        <br />
        <Autocomplete
          id="myAutoComplete"
          options={serviceStore.arrServices}
          renderInput={(params) => <TextField {...params}
            label="Type Of Service" />}
          value={typeService}
          onSelect={(e) => setTypeService(e.target.value)}
        />
        <br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            id="date" label="Choose a date"
            className={a}
            name="date"
            value={dateTime}
            type='date'
            onChange={(e) => setDateTime(e.$d)}
          />
        </LocalizationProvider>
        <button type='submit' className="send">send</button>
      </form>
    </>
  )
}))

export default AddMeeting
