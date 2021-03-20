import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./mobile-menu";

const Header = ({ state, actions }) => {  

  
  return (
    <>

      <Container>

        <StyledLink link="/">

          <Title>{state.frontity.title}</Title>

        </StyledLink>

        <Description>{state.frontity.description}</Description>

        {<MobileMenu/>}

      </Container>

      <Nav/>
     
    </>
  );


};

// Connect the Header component to get access to the `state` in it's `props`

export default connect(Header);

const Container = styled.div`

  max-width: 100%;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f5f5f5;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${ props => props.isPostType ? ( props.isPage ? 'lightsteelblue' : 'lightseagreen' ) : 'maroon'};

  
  @media screen and (max-width: 560px) {
    padding: 0.7rem 1rem;
  }


`;

const Title = styled.h2`
  margin: 0;
`;

const Description = styled.h4`
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;