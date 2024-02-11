import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import businessStore from "../../data/stores/businessStore";
import { observer } from "mobx-react"
import businessServer from "../../data/server/businessServer";
import { useEffect } from "react";


const BusinessData = (observer(() => {

  const details = businessStore.details;

  useEffect(() => {
    businessServer.getBusiness();
  }, []);

  return (
    <>
      <div className="businessDetails" sx={{ maxWidth: 700 }}>
        <CardContent>
          <img src="/images/logo.gif" alt="logo" />
          <Typography gutterBottom variant="h5" component="div">
            name: {details.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            address: {details.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            mail: {details.mail}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            phone: {details.phone}
          </Typography>
        </CardContent>
      </div>


    </>
  )
}))

export default BusinessData
