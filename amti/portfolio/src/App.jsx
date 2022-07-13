import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./layout/Layout";

import { Home } from "./pages/Home";
import { Detalle } from "./pages/Detalle";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detalle/:id" element={<Detalle />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
