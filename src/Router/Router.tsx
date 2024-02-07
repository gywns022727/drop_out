import { Provider } from "react-redux";

import { store } from "../store/config";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../Page/Main";
import School from "../Page/School";
import Private from "../Page/Privacy";
import Reason from "../Page/Reason";
import Counter from "../Page/Counter";
import User from "../Page/User";

export default function index() {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/school" element={<School />} />
            <Route path="/private" element={<Private />} />
            <Route path="/reason" element={<Reason />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
