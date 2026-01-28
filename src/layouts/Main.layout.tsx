import React from "react";
import { Container } from "../components/Container";
import { Outlet } from "react-router";

export function MainLayout() {
  return (
    <React.Fragment>
      <Container as="header" className="mt-3 md:mt-20">
        ola mundo
      </Container>

      <main className="mt-4 md:mt-8">
        <Outlet />
      </main>

      <Container as="footer" className="my-5 md:my-10">
        rodape
      </Container>
    </React.Fragment>
  );
}
