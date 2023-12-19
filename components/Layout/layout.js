import Navigation from "../Navigation/Navigation";
import styled from "styled-components";

const StyledTitle = styled.h1`
  text-transform: uppercase;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
`;

export default function Layout() {
  return (
    <>
      <StyledTitle>Art Gallery</StyledTitle>
      <Navigation />
    </>
  );
}
