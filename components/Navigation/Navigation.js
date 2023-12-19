import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  background-color: black;
  color: white;
  border-radius: 10px;
  padding: 5px;
  text-decoration: none;
  &:hover {
    color: coral;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  padding-bottom: 15px;
`;

export default function Navigation() {
  return (
    <Container>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/art-pieces">Pieces</StyledLink>
      <StyledLink href="/favourites">Favourites</StyledLink>
    </Container>
  );
}
