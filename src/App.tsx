import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles.scss"
import Favorites from "./pages/Favorites";
import Layout from "./pages/Layout";
import Info from "./pages/Info";
import Settings from "./pages/Settings";
import { Provider } from "react-redux";
import { store } from './Store/index';
import Favdetails from "./pages/favdetails";

function App() {
  return <div className="page">
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/favorites/:id" element={<Favdetails />} />
            <Route path="/info" element={<Info />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </Provider>
  </div>
}

export default App
