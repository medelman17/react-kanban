import ApolloClient from 'apollo-boost';
import {
  InMemoryCache,
  defaultDataIdFromObject
} from 'apollo-cache-inmemory';

export const client = new ApolloClient({
  cache: new InMemoryCache({
    dataIdFromObject: obj => {
      switch (obj.__typename) {
        case 'task':
          return obj.id;
        default:
          return defaultDataIdFromObject(obj);
      }
    }
  }),
  uri: 'https://us1.prisma.sh/michael-edelman-ba8919/kanban-demo/dev'
});
