import BugtrackerLogo from './Bugtrackerlogo.png';

function Navbar() {
    return (
        <div className="bg-white text-gray-800 py-4 px-6 flex justify-between items-center shadow-2xl">
            <div className="flex items-center ml-4">
                <img src={BugtrackerLogo} alt="Bugtracker Logo" className="w-20 h-15 mr-2" />
                <span className="mr-4 ml-14 text-xl">Welcome</span>
            </div>
            <div className="flex items-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-4">
                    Profile
                </button>
            </div>
            
        </div>
    );
}

export default Navbar;