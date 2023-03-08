import styled from "styled-components";

const StyledBanner = styled.div`
  background-color: gray;
  width: 1000px;
  height: 100%;
  margin: 10px;
`;

const StyledDiv = styled.div`
  background-color: lightblue;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainLine = styled.hr`
  width: 1000px;
  color: gray;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
`;

function MainPage() {
  return (
    <StyledDiv>
      <Header>
        <h1>My_Album</h1>
        <h1>My_Album2</h1>
      </Header>
      <MainLine />
      <StyledBanner />
    </StyledDiv>
  );
}

export default MainPage;
