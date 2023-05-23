import styled from "styled-components";
import birdImage from "../images/bird.jpg";

const StyledBody = styled.div`
  background-color: gray;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  padding: 20px;
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

const ImageBox = styled.div`
  display: flex;
  background-color: yellow;
  width: 200px;
  height: 200px;
`;

function MainPage() {
  return (
    <StyledDiv>
      <Header>
        <h1>My_Album</h1>
        <h1>My_Album2</h1>
      </Header>
      <MainLine />
      <StyledBody>
        <ImageBox>
          <img
            src={birdImage}
            alt="adsfsa"
            style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
          />
          
        </ImageBox>
        <ImageBox>
          <img
            src={birdImage}
            alt="adsfsa"
            style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
          />
          
        </ImageBox>
        <ImageBox>
          <img
            src={birdImage}
            alt="adsfsa"
            style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
          />

        </ImageBox>
        <ImageBox>
          <img
            src={birdImage}
            alt="adsfsa"
            style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
          />

        </ImageBox>
        <ImageBox>
          <img
            src={birdImage}
            alt="adsfsa"
            style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
          />

        </ImageBox>
      </StyledBody>
    </StyledDiv>
  );
}

//TODO:

export default MainPage;
