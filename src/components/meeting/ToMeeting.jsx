import { useState } from "react";
import AddMeeting from "./AddMeeting";

function ToMeeting() {

  const [addMeeting, setAddMeeting] = useState(false);

  const handleClick = () => {
    setAddMeeting(current => !current);
  }

  return (
    <>
      <br />
      <button onClick={handleClick}>Add Meeting</button>
      {addMeeting && (
        <AddMeeting setAddMeeting2={setAddMeeting} />
      )}
    </>
  )
}
export default ToMeeting