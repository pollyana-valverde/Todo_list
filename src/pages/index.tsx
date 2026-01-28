import { BrowserRouter, Routes, Route } from "react-router";

import { MainLayout } from "../layouts/Main.layout";

import { Home } from "./Home.page";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
