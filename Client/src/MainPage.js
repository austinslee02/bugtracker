import { useState } from 'react';
import ProjectDisplay from './components/ProjectDisplay';
import ProjectTable from './components/ProjectTable';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';


const MainPage = () => {
    const [selectedProject, setSelectedProject] = useState({});
    const [currPage, setCurrPage] = useState("ProjectTable");

    return (
        <page> 
            <NavBar />
            <SideBar />
            {currPage == "ProjectTable" && (
                <ProjectTable 
                    setCurrPage={setCurrPage}
                    setCurrProject={setSelectedProject}
                />
            )}
            {currPage == "ProjectDisplay" && (
                <ProjectDisplay 
                    project={selectedProject} 
                    setCurrPage={setCurrPage}/>
            )}
        </page>
    );
};

export default MainPage;