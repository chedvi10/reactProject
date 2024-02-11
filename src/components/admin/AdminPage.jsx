import { useState } from "react"
import Login from "./Login"
import AdminHome from "./AdminHome"
import loginStore from "../../data/stores/loginStore"
import { observer } from "mobx-react"


const AdminPage = (observer(() => {

    return (
        <>
            {!loginStore.isLogin ? <Login /> : <AdminHome />}
        </>
    )
}))

export default AdminPage
