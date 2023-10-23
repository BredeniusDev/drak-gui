import { Route, Routes } from 'react-router-dom';
import { Header } from './shared/components/Header';
import { MinaDrakar } from './views/MinaDrakar/MinaDrakar';
import { Registreradrake } from './views/RegistreraDrake/Registreradrake';
import { About } from './views/About/About';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError((error) => {
  if (error.graphQLErrors) {
    error.graphQLErrors.map((error) => {
      alert(`Graphql error ${error.message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: 'http://localhost:4000/' })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header></Header>
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<MinaDrakar />} />
            <Route path="/drake/new" element={<Registreradrake />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
