import "./Sidebar.css";
import KlashaLogo from "../../images/logo.svg";
import DashboardIcon from "../../images/dashboard.svg";
import BalanceIcon from "../../images/balances.svg";
import CustomerIcon from "../../images/customers.svg";
import AnalyticsIcon from "../../images/analytics.svg";
import SettingsIcon from "../../images/settings.svg";
import TeamIcon from "../../images/team.svg";
import ContactIcon from "../../images/contact.svg";
import LogoutIcon from "../../images/logout.svg";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar__responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={KlashaLogo} alt="logo" /> 
                    {/* <h3>Klasha</h3> */}
                </div>
                <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar()}></i>
            </div>
            <div className="sidebar__menu">
                <h6>Main pages</h6>
                <div className="sidebar__link active__menu__link">
                    <img src={DashboardIcon} alt="dashboard" width="12" />
                    <a href="/">Dashboard</a>
                </div>
                <div className="sidebar__link active__menu__link">
                    <img src={BalanceIcon} alt="balance" width="12" />
                    <a href="/" alt="">Balances</a>
                </div>
                <div className="sidebar__link">
                    <img src={CustomerIcon} alt="customer" width="12" />
                    <a href="/">Customers</a>
                </div>
                <div className="sidebar__link">
                    <img src={AnalyticsIcon} alt="analytics" width="12" />
                    <a href="/">Analytics</a>
                </div>

                <h6>General</h6>
                <div className="sidebar__link">
                    <img src={SettingsIcon} alt="settings" width="12" />
                    <a href="/">Settings</a>
                </div>
                <div className="sidebar__link">
                    <img src={TeamIcon} alt="team" width="12" />
                    <a href="/">Team</a>
                </div>
                <div className="sidebar__link">
                    <img src={ContactIcon} alt="contact" width="12" />
                    <a href="/">Contact</a>
                </div>
                <div className="sidebar__link">
                    <img src={LogoutIcon} alt="logout" width="12" />
                    <a href="/">Logout</a>
                </div>
            </div> 
        </div>
    )
}

export default Sidebar
