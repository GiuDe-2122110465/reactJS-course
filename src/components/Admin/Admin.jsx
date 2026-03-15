import { useState } from "react";
import SideBar from "./SideBar";
import './admin.scss'
import { FaBars } from "react-icons/fa";
const Admin = (props)=> {
    const [collapsed,SetCollapsed] = useState(false);
    return(
        <div>
            <div className="admin-container">
                <div className="admin-sidebar">
                    <SideBar  collapsed = {collapsed} />
                </div>
                <div className="admin-content"> 
                    <FaBars onClick={()=>SetCollapsed(!collapsed)} />
                    content
                </div>
            </div>
        </div>
    )
}
export default Admin;