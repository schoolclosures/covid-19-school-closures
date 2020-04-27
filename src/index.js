import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/root.reducer';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import thunk from 'redux-thunk';
import App from './components/App';
import './index.scss';

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/ck9ck6qew0mct01z31t0ec69z/master",
  mode: 'no-cors',
})

const saveStateToLocalStorage = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
}

const getStateFromLocalStorage = () => {
  try {

    const state = localStorage.getItem('state');
    const parsedState = JSON.parse(state);

    if (parsedState) {
      return parsedState;
    }

    return undefined;

  } catch(error) {
    return undefined;
  }
};

const persistedState = getStateFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(
    thunk,
  ),
);

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  )
};

store.subscribe(() => saveStateToLocalStorage(store.getState()));


ReactDOM.render(<AppWrapper />, document.querySelector('#root'));

