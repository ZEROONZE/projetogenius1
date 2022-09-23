import React from "react";
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from "../components/Layout";
import Dashboard from "../components/pages/Dashboard";
import Api from "../components/pages/Dashboard/Home";
import Disparos from "../components/pages/DisparosM";
import List from "../components/pages/List";
import Foto from "../components/pages/List/Foto/Foto";


const AppRoutes: React.FC = () => {  

return ( 
    <Layout>
      <Routes>
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/list" element={<List />} />
        <Route path="/list" element={<List />} />
        <Route path="/Disparos" element={<Disparos />} />
        <Route path="/foto" element={<Foto />} />
      </Routes>
    </Layout>
);

}
export default AppRoutes;