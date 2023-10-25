import Header from "./Components/header"
import Footer from "./Components/Footer";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Administrative_matter from "./Components/Administrative_matter";
import Landing_Page from "./Components/Landing_Page";
import My_Queries from "./Components/My_Queries";
import './App.css';

function App() {
  return (
   <BrowserRouter>
   <Header/>
{/* <Footer/>    */}


   <Routes>
    <Route path="/" element={<Landing_Page/>}></Route>
    <Route path="/administrative_matter" element={<Administrative_matter/>}></Route>
    <Route path="/my_queries" element={<My_Queries/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
