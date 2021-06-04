import "./Sidebar.css";
import KlashaLogo from "../../images/logo.svg";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar__responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={KlashaLogo} alt="logo" /> 
                    <h3>Klasha</h3>
                </div>
                <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar()}></i>
            </div> 
        </div>
    )
}

export default Sidebar
