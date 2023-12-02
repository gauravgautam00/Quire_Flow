import Header from "./Components/header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrative_matter from "./Components/Administrative_matter";
import Landing_Page from "./Components/Landing_Page";
import My_Queries from "./Components/My_Queries";
import Single_Query from "./Components/Single_Query";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Landing_Page />}></Route>
        <Route
          path="/administrative_matter"
          element={<Administrative_matter />}
        ></Route>
        <Route path="/my_queries" element={<My_Queries />}></Route>
        <Route path="/my_queries/:id" element={<Single_Query />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
