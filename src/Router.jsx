import {createBrowserRouter} from 'react-router-dom';
import AdminPage from './components/admin/AdminPage';
import UserHome from './components/user/UserHome';
import ToAdd from './components/service/ToAdd';
import ToMeeting from './components/meeting/ToMeeting';



const router = createBrowserRouter([
    {
      path: '/',
      element: <UserHome></UserHome>,
      children:[
        {
            path:"/",element:<ToMeeting></ToMeeting>
        }
      ],
      errorElement: <div>error 404</div>
    },
    {
      path: '/admin',
      element: <AdminPage/>,
      children:[
        {
            path:":AddService",element:<ToAdd></ToAdd>
        }
      ],
      errorElement: <div>error Admin</div>,
    }
  ])

  export default router;