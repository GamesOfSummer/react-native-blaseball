import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';
import rootSaga from './redux/rootSaga';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 10,
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(invariant(), sagaMiddleware))
);
sagaMiddleware.run(rootSaga);


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      </Provider>
    );
  }
}
