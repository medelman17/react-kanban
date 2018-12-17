import React from 'react';
import MainScreen from './screens/Main';
import Board from './components/board';
import { ApolloProvider } from 'react-apollo-hooks';
import { client } from './core/apollo/createApolloClient';

function App() {
  return (
    <ApolloProvider client={client}>
      <React.Suspense fallback={<div>loading...</div>}>
        <MainScreen>
          <Board />
        </MainScreen>
      </React.Suspense>
    </ApolloProvider>
  );
}

export default App;
