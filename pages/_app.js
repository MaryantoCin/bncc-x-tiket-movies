import { ChakraProvider } from '@chakra-ui/react'
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

const initialState = {
  session_id: null,
  user_data: null
};
  
export const reducer = (state = initialState, action) => {
  switch(action.type) {
	  case 'LOGIN':
      return { session_id: action.session_id, user_data: action.user_data };
    case 'LOGOUT':
      return { session_id: null, user_data: null };
    default:
      return state;
  }
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
export let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <Component {...pageProps}/>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
