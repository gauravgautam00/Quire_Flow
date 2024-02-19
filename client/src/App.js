import Header from "./Components/header";
// import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrative_matter from "./Components/Administrative_matter";
import Landing_Page from "./Components/Landing_Page";
import My_Queries from "./Components/My_Queries";
import Single_Query from "./Components/Single_Query";
import "./App.css";
import Deeper_Dive from "./Components/Deeper_Dive";
import New_Query from "./Components/New_Query";
import Administrative_matter_singleQuery from "./Components/Administrative_matter_singleQuery";
import Public_Queries_singleQuery from "./Components/Public_Queries_singleQuery";
import Authentication from "./Components/Authentication";
import My_Profile from "./Components/My_Profile";
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
        <Route path="/my_queries/:objectId" element={<Single_Query />}></Route>
        <Route path="/authentication" element={<Authentication />}></Route>
        <Route path="/new_query" element={<New_Query />}></Route>
        <Route
          path="/administrative_matter/deeper_dive"
          element={<Deeper_Dive />}
        ></Route>
        <Route
          path="/administrative_matter/:objectId"
          element={<Administrative_matter_singleQuery />}
        ></Route>
        <Route
          path="/public_queries/query"
          element={<Public_Queries_singleQuery />}
        ></Route>
        <Route path="/my_profile" element={<My_Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
