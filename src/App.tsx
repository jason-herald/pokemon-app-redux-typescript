
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage/ProductDescriptionPage";
import "./index.css";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<ProductListingPage />} />
          <Route
            path="/pokemon/:pokemonName"
            element={<ProductDescriptionPage />}
          />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
