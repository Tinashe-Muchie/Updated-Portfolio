import { ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-us-east-1.graphcms.com/v2/cl3od1v4s5h8g01z1audb9iz0/master',
  cache: new InMemoryCache(),
});

export default client;