import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `
  type User {
    id: ID!
    name: String
    email: String
  }

  type Ticket {
    id: ID!
    title: String
    description: String
    project: Project
  }

  type Project {
    id: ID!
    name: String
    description: String
    users: [User]
    tickets: [Ticket]
  }

  type Query {
    projects: [Project]
    tickets: [Ticket]
    users: [User]
  }
`;
const projects = [
    {
        id: '1',
        name: 'Project A',
        description: 'This is the first project',
        userIds: ['1', '2'],
        ticketIds: ['1', '2'], // Tickets associated with this project
    },
    {
        id: '2',
        name: 'Project B',
        description: 'Another project',
        userIds: ['2', '3'],
        ticketIds: ['3', '4'],
    },
];
const tickets = [
    {
        id: '1',
        title: 'Ticket 1',
        description: 'This is the first ticket',
        project: projects[0], // Reference to the project
    },
    {
        id: '2',
        title: 'Ticket 2',
        description: 'Another ticket',
        project: projects[0],
    },
    {
        id: '3',
        title: 'Ticket 3',
        description: 'Third ticket',
        project: projects[1],
    },
    {
        id: '4',
        title: 'Ticket 4',
        description: 'Fourth ticket',
        project: projects[1],
    },
];
const users = [
    {
        id: '1',
        name: 'User 1',
        email: 'user1@example.com',
    },
    {
        id: '2',
        name: 'User 2',
        email: 'user2@example.com',
    },
    {
        id: '3',
        name: 'User 3',
        email: 'user3@example.com',
    },
];
const resolvers = {
    Query: {
        projects: () => projects,
        tickets: () => tickets,
        users: () => users,
    },
    Project: {
        users: (project) => {
            return users.filter((user) => project.userIds.includes(user.id));
        },
        tickets: (project) => {
            return tickets.filter((ticket) => project.ticketIds.includes(ticket.id));
        },
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
