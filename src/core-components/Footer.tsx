import { Container } from "../components/Container";

export function Footer() {
  return (
    <Container
      as="footer"
      className="text-gray-300 my-5 md:my-10 flex items-center justify-center"
    >
      &copy; 2024 Pollyana Valverde. All rights reserved.
    </Container>
  );
}
