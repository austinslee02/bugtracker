const ProjectDisplay = ({ project, setCurrPage }) => {
  const handleBack = () => {
    setCurrPage("ProjectTable");
  };
    
    return (
        <div class = "ml-52 mt-8 bg-blue-200 max-w-screen-2xl sm:rounded-lg">
          <h2 className="text-xl font-semibold">{project.name}</h2>
          <p className="text-gray-600">{project.description}</p>
    
          <h3 className="text-lg font-semibold mt-4">Assigned Users:</h3>
          <ul>
            {project.users.map((user) => (
              <li key={user.name}>{user.name}</li>
            ))}
          </ul>
    
          <h3 className="text-lg font-semibold mt-4">Tickets:</h3>
          <ul>
            {project.tickets.map((ticket) => (
              <li key={ticket.id}>
                {ticket.title} - {ticket.description}
              </li>
            ))}
          </ul>
          <button onClick={handleBack} class="bg-white sm:rounded-lg">Return</button>
        </div>
      );
}

export default ProjectDisplay;