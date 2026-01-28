import { Container } from "../components/Container";

import logo from "../assets/images/logo.svg";

export function Header() {
  return (
    <Container as="header" className="mt-3 md:mt-20">
      <img className="h-9 md:h-12" src={logo} alt="Logo" />
    </Container>
  );
}
