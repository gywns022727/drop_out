import { Provider } from "react-redux";
import { store } from "../store/config";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../Page/Main";
import School from "../Page/School";
import Privacy from "../Page/Privacy";
import Reason from "../Page/Reason";
import DropOut from "../Page/DropOut";

export default function index() {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/school" element={<School />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/reason" element={<Reason />} />
            <Route path="/dropout" element={<DropOut />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
