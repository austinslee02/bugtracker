import { AiFillHome } from 'react-icons/ai';
import { BsFillTicketDetailedFill } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { HiListBullet } from 'react-icons/hi2';
import { GoProject } from 'react-icons/go';

const SideBar = ({ setCurrPage }) => {
    const handleHomeClick = () => {
        setCurrPage("ProjectTable");
    };
    const handleCreateProjectClick = () => {
        setCurrPage("CreateProject");
    };

    return (
        <div className="fixed top-13 left-0 h-screen w-45 flex flex-col bg-white text-gray-800 shadow-2xl">
            <SideBarIcon icon={<AiFillHome size="28" />} text="Home" onClick={handleHomeClick}/>
            <SideBarIcon icon={<GoProject size="28" />} text="Create Project" onClick={handleCreateProjectClick} />
            <SideBarIcon icon={<BsFillTicketDetailedFill size="28" />} text="Create Ticket" />
            <SideBarIcon icon={<HiListBullet size="28" />} text="View Tickets" />
            <SideBarIcon icon={<BiUser size="28" />} text="Profile" />
        </div>
    );
};

const SideBarIcon = ({ icon, text, onClick }) => (
    <button className="sidebar-icon mb-4 p-2" onClick={onClick}>
        {icon}
        <span className="icon-text">{text}</span>
    </button>
);

export default SideBar;