import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {About, Home, Team, Products, Pricing, Contact, Layout} from "./pages/index";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
