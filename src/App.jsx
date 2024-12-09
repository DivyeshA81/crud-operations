import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../src/assets/Components/Sidebar/index";
import Car from "../src/assets/Components/Car/index";
import Home from "./assets/Components/Home/Home";
import Add from "../src/assets/Components/Car/actions/Add";
import CarViewPage from "../src/assets/Components/Car/actions/View";
import EditCarPage from "../src/assets/Components/Car/actions/Edit";
import Company from "../src/assets/Components/Company/index";
import CompanyAddPage from "../src/assets/Components/Company/Actions/Add"
import CompanyViewPage from "../src/assets/Components/Company/Actions/View";
import CompanyEditPage from "../src/assets/Components/Company/Actions/Edit";
import Panorama360 from '../src/assets/Components/360View/'
const App = () => {
  return (
    // <Router>
    //   <div className="flex">
    //     <Sidebar />  
    //     <div className="flex-1 p-5">
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/car" element={<Car />} />
    //         <Route path="/add-car" element={<Add />} />
    //         <Route path="/edit-car/:id" element={<EditCarPage />} />
    //         <Route path="/view-car/:id" element={<CarViewPage/>} />
    //         <Route path="/company" element={<Company />} />
    //         <Route path="/company-add" element={<CompanyAddPage />} />
    //         <Route path="/company-view/:id" element={<CompanyViewPage/>} />
    //         <Route path="/company-edit/:id" element={<CompanyEditPage/>} />
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
    <div>
        <div className="App">
      <h1>360 Degree Panorama</h1>
      <Panorama360 imageUrl={imageUrl} />
    </div>
    </div>
  );
};

export default App;
