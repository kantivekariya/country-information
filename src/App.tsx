import MainRoutes from "./routes";
import { persistStoreData, store } from "./redux/store/ConfigureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStoreData}>
          <MainRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
