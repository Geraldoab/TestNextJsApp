import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
        uri: "http://localhost:5214/graphql",
        cache: new InMemoryCache({
            addTypename: false
        })
    });
};

export default createApolloClient;