import { useEffect } from "react";
import { observer } from "mobx-react"
import serviceStore from "../../data/stores/serviceStore";
import serviceServer from "../../data/server/serviceServer";
import { Outlet } from "react-router-dom";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const ServiceList = (observer(() => {

  const arr = serviceStore.services;
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    serviceServer.getServices();
  }, []);
  return (
    <>
      <div id="list">
        {arr.map((service, i) =>
          <Item key={i} className="item">

            Type of service: {service.name}
            <br />
            Discreption: {service.description}
          </Item>
        )}
      </div>
      <Outlet />
    </>
  )
}))
export default ServiceList