import { gql, useQuery, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';

const CreateProject = () => {
    const GET_USERS = gql`
    query Users {
        users {
          name
          email
        }
      }
    `;

    const CREATE_PROJECT = gql`
    mutation CREATE_PROJECT($name: String!, $description: String!, $users: [UserInput]) {
        addProject(input: { name: $name, description: $description, users: $users }) {
            id
            name
            description
            users {
                id
                name
                email
            }
        }
    }
    `;


    const [inputProject, setInputProject]=useState({
        name: "",
        description: "",
        users: []
    });
    const { loading, error, data } = useQuery(GET_USERS);
    const [
        createProject,
        {
            loading: createProjectLoading,
            error: createProjectError,
            data: createProjectData,
        },
    ] = useMutation(CREATE_PROJECT);
    useEffect(() => {
        console.log(createProjectError)
    })
    const handleCreateProject = () => {
        createProject({
          variables: {
            name: inputProject.name,
            description: inputProject.description,
            users: inputProject.users
          },
        });
      };
    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-600">Error: {error.message}</p>;

    const users = data.users;

    return (
        <div className="max-w-screen-2xl mx-auto mt-8">
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
                <thead>
                    <tr>
                        <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold border-b">Field</th>
                        <th className="py-2 px-4 bg-gray-200 text-gray-600 font-semibold border-b">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 px-4 border-b">Project Name</td>
                        <td className="py-2 px-4 border-b">
                            <input
                                type="text"
                                className="w-full border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter project name"
                                value={inputProject.name}
                                onChange={(e) => setInputProject({ ...inputProject, name: e.target.value })}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">Description</td>
                        <td className="py-2 px-4 border-b">
                            <textarea
                                className="w-full border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter project description"
                                value={inputProject.description}
                                onChange={(e) => setInputProject({ ...inputProject, description: e.target.value })}
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">Assign Users</td>
                        <td className="py-2 px-4 border-b">
                            <select
                                className="w-full border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
                                multiple
                                value={inputProject.users}
                                onChange={(e) => setInputProject({ ...inputProject, users: e.target.value })}
                            >
                            {users.map((user) => (
                                <option key={user.id} value={user}>
                                    {user.name} - {user.email}
                                </option>
                            ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">Submit</td>
                        <td className="py-2 px-4 border-b">
                            <button className="bg-blue-500 text-white py-1 px-4 rounded-md" onClick={handleCreateProject}>
                                Create Project
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
  
  export default CreateProject;