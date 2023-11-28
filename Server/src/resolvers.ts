import db from "../db/conn.js";

const resolvers = {
  User: {
    // Add any custom resolver functions for the User type if needed
  },
  Ticket: {
    // Add any custom resolver functions for the Ticket type if needed
  },
  Project: {
    // Add any custom resolver functions for the Project type if needed
  },
  Query: {
    projects: async () => {
      const collection = await db.collection("projects");
      const projects = await collection.find({}).toArray();
      return projects;
    },
    tickets: async () => {
      const collection = await db.collection("tickets");
      const tickets = await collection.find({}).toArray();
      return tickets;
    },
    users: async () => {
      const collection = await db.collection("users");
      const users = await collection.find({}).toArray();
      return users;
    },
  },
  Mutation: {
    addProject: async (_, { input }) => {
      const collection = await db.collection("projects");
      const insert = await collection.insertOne(input);
      if (insert.acknowledged)
        return { ...input, id: insert.insertedId };
      return null;
    },
  },
};

export default resolvers;
