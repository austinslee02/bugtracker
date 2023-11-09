import { gql, useQuery } from '@apollo/client';

const ProjectTable = ({ setCurrPage, setCurrProject }) => {
    
    const GET_PROJECTS = gql`
    query GetProjects {
        projects {
        id
        name
        description
        users {
            name
        }
        tickets {
            id
            title
            description
        }
        }
    }
    `
    const handleEditClick = (project) => {
        setCurrPage("ProjectDisplay");
        setCurrProject(project);
      };
      const { loading, error, data } = useQuery(GET_PROJECTS);
  
      if (loading) return <p className="text-center">Loading...</p>;
      if (error) return <p className="text-center text-red-600">Error: {error.message}</p>;

      const projects = data.projects;
  
    return (
      <div class="max-w-screen-2xl  relative overflow-x-auto sm:rounded-lg ml-56 mt-8">
        <table class="w-full text-sm text-left text-black">
          <thead class="text-xs text-gray-700 uppercase bg-blue-300">
            <tr>
              <th scope="col" class="px-6 py-3">
                Projects
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>
              <th scope="col" class="px-6 py-3">
                Assigned Developers
              </th>
              <th scope="col" class="px-6 py-3">
                Tickets
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr class="bg-blue-200 border-b" key={project.id}>
                <td class="px-6 py-4">{project.name}</td>
                <td class="px-6 py-4">{project.description}</td>
                <td class="px-6 py-4">
                  <ul>
                  {project.users.slice(0, 2).map((user) => (
                    <li key={user.name} class="list-disc ml-4">{user.name}</li>
                    ))}
                    {project.users.length > 2 && (
                        <li class="list-disc ml-4">...</li>
                    )}
                  </ul>
                </td>
                <td class="px-6 py-4">
                  <ul>
                  {project.tickets.slice(0, 2).map((ticket, index) => (
                    <li key={ticket.id} class="list-disc ml-4">
                        {ticket.title} - {ticket.description}
                    </li>
                    ))}
                    {project.tickets.length > 2 && (
                        <li class="list-disc ml-4">...</li>
                    )}
                  </ul>
                </td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-blue-600 hover:underline" onClick={() => handleEditClick(project)}>Edit</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default ProjectTable;