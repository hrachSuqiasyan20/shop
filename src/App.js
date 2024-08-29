import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/pages/layout/page";
import Lay from "./components/pages/layout/page";

function App() {
  return (
       // <Routes>
       //     <Route path='/' element={<Layout/>}>
       //         <Route index element={<Home/>}/>
       //     </Route>
       // </Routes>
      <Home/>
  );
}

export default App;
