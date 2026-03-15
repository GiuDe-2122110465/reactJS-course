 
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import './SideBar.scss'
import { GiReactor } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../../assets/bg2.jpg';
const SideBar = (props) => {
    const { image, collapsed,  toggled, handleToggleSidebar } =props
    return (
        <>
                <ProSidebar image={sidebarBg}
                        collapsed={collapsed}
                        toggled={toggled}
                        breakPoint="md"
                        onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
            <GiReactor  size={'3em'} color='blue' />
          jude admin
            </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">new</span>}
          >
            dashboard 
          </MenuItem>
          <MenuItem icon={<FaGem />}> component</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            icon={<FaRegLaughWink />}
          >
            <MenuItem>  quản lý user </MenuItem>
            <MenuItem>  quản lý bài quiz</MenuItem>
            <MenuItem>  quản lý câu hỏi</MenuItem>
          </SubMenu>
           
           
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/GiuDe-2122110465/reactJS-course/tree/prod"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              vs
            </span>
          </a>
        </div>
      </SidebarFooter>

        </ProSidebar>;
        </>
    )
}
export default SideBar;