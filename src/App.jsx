import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
   <BrowserRouter>
      <Header />
      <Hero />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;