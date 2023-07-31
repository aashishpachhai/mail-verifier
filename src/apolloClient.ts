import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Store } from "./store";

const httpLink = createHttpLink({
  uri: "http://localhost:3333/graphql", // Replace this with your GraphQL server endpoint
});

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from your state, context, or local storage
  const authToken = Store.getState()?.token;

  return {
    headers: {
      ...headers,
      authorization: authToken ? `Bearer ${authToken}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
