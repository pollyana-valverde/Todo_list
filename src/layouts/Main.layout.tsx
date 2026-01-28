import React from "react";

import { Outlet } from "react-router";

import { Header } from "../core-components/Header";
import { MainContent } from "../core-components/MainContent";
import { Footer } from "../core-components/Footer";

export function MainLayout() {
  return (
    <React.Fragment>
      <Header />

      <MainContent>
        <Outlet />
      </MainContent>

      <Footer />
    </React.Fragment>
  );
}
