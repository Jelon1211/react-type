import "./sidebar.css";
import {
  HomeOutlined,
  ChatBubbleOutline,
  CalendarMonth,
  PersonOutlineOutlined,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <HomeOutlined className="sidebarIcon" />
              Dashboard
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Jobs
            </li>
            <li className="sidebarListItem">
              <CalendarMonth className="sidebarIcon" />
              Calendar
            </li>
            <li className="sidebarListItem">
              <PersonOutlineOutlined className="sidebarIcon" />
              Candidates
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
