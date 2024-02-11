import { useState, } from "react"
import { InputAdornment, TextField, } from "@mui/material";
import serviceServer from "../../data/server/serviceServer";


const AddService = (props) => {

  const [id, setNewTypeId] = useState('');
  const [name, setNewType] = useState('');
  const [description, setNewTypeDescription] = useState('');
  const [price, setNewTypePrice] = useState('');
  const [duration, setNewTypeDuration] = useState('');

  const handleAddService = (e) => {
    e.preventDefault();
    const newService = { id, name, description, price, duration }
    serviceServer.addServiceToServer(newService);
    props.setAddService2(false);
  }

  return (
    <>

      <form onSubmit={handleAddService} className='heightS popup'>
        <h3>edit service:</h3>
        <TextField
          label="id"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
          type='text' value={id} onChange={(e) => setNewTypeId(e.target.value)}
        />
        <TextField
          label="name"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
          type='text' value={name} onChange={(e) => setNewType(e.target.value)}
        />
        <TextField
          label="description"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
          type='text' value={description} onChange={(e) => setNewTypeDescription(e.target.value)}
        />
        <TextField
          label="price"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
          type='number' value={price} onChange={(e) => setNewTypePrice(e.target.value)}
        />
        <TextField
          label="duration"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
          type='text' value={duration} onChange={(e) => setNewTypeDuration(e.target.value)}
        />
        <button type="submit" variant="outlined">To Add</button>
      </form>

    </>
  )
}

export default AddService