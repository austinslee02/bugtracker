import { useState } from 'react';
import ProjectDisplay from './components/ProjectDisplay';
import ProjectTable from './components/ProjectTable';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import CreateProject from './components/CreateProject';


const MainPage = () => {
    const [selectedProject, setSelectedProject] = useState({});
    const [currPage, setCurrPage] = useState("ProjectTable");

    return (
        <page> 
            <NavBar />
            <SideBar setCurrPage={setCurrPage}/>
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
            {currPage == "CreateProject" && (
                <CreateProject />
            )}
        </page>
    );
};

export default MainPage;